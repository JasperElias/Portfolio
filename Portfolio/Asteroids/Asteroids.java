
/*
CLASS: Asteroids
DESCRIPTION: Extending Game, Asteroids is all in the paint method.
NOTE: This class is the metaphorical "main method" of your program,
      it is your control center.
Original code by Dan Leyzberg and Art Simon
 */
import java.awt.*;
import java.util.*;

public class Asteroids extends Game {
	public static final int SCREEN_WIDTH = 800;
	public static final int SCREEN_HEIGHT = 600;

	static int counter = 0;
	static int starCounter = 0;
	
	//arraylist of all asteroids
	private java.util.List<Asteroid> randomAsteroids = new ArrayList<Asteroid>();
	
	//array to store bullets that need to be removed
	public ArrayList<Bullet> bulletsR = new ArrayList<Bullet>();
	public ArrayList<Asteroid> asteroidsR = new ArrayList<Asteroid>();
	
	private Ship ship;
	private int shipLives = 3;
	
	
	public Star[] stars;
	
	//boolean for collision status
	private boolean cStatus = false;
	
	private boolean collisionOver = true;
	private boolean collisionHappened = false;
	
	public Asteroids() {
		super("Asteroids!",SCREEN_WIDTH,SCREEN_HEIGHT);
		this.setFocusable(true);
		this.requestFocus();

		// create a number of random asteroid objects
		randomAsteroids = createRandomAsteroids(10,60,30);
		Point[] s1 = {
				new Point(0,0),
				new Point(10,11),
				new Point(0,20),
				new Point(30,12),
		};
		ship = new Ship(s1, new Point(this.SCREEN_WIDTH/2,this.SCREEN_HEIGHT/2), 270.0);
		this.addKeyListener(ship);
		
		stars = createStars(500,3);
	}

	//  Create an array of random asteroids
	private java.util.List<Asteroid> createRandomAsteroids(int numberOfAsteroids, int maxAsteroidWidth,
			int minAsteroidWidth) {
		java.util.List<Asteroid> asteroids = new ArrayList<>(numberOfAsteroids);

		for(int i = 0; i < numberOfAsteroids; ++i) {
			// Create random asteroids by sampling points on a circle
			// Find the radius first.
			int radius = (int) (Math.random() * maxAsteroidWidth);
			if(radius < minAsteroidWidth) {
				radius += minAsteroidWidth;
			}
			// Find the circles angle
			double angle = (Math.random() * Math.PI * 1.0/2.0);
			if(angle < Math.PI * 1.0/5.0) {
				angle += Math.PI * 1.0/5.0;
			}
			// Sample and store points around that circle
			ArrayList<Point> asteroidSides = new ArrayList<Point>();
			double originalAngle = angle;
			while(angle < 2*Math.PI) {
				double x = Math.cos(angle) * radius;
				double y = Math.sin(angle) * radius;
				asteroidSides.add(new Point(x, y));
				angle += originalAngle;
			}
			// Set everything up to create the asteroid
			Point[] inSides = asteroidSides.toArray(new Point[asteroidSides.size()]);
			Point inPosition = new Point(Math.random() * SCREEN_WIDTH, Math.random() * SCREEN_HEIGHT);
			double inRotation = Math.random() * 360;
			asteroids.add(new Asteroid(inSides, inPosition, inRotation));
		}
		return asteroids;
	}

	public void paint(Graphics brush) {
		brush.setColor(Color.black);
		brush.fillRect(0,0,width,height);
		// sample code for printing message for debugging
		// counter is incremented and this message printed
		// each time the canvas is repainted
		counter++;
		starCounter++;
		brush.setColor(Color.white);
		brush.drawString("Counter is " + counter,10,10);

		
		// display the random asteroids
		for (Asteroid asteroid : randomAsteroids) {
			asteroid.paint(brush,Color.white);
			asteroid.move();
			
			//checks for collision
			if(asteroid.collision(ship)) {
				cStatus = true;
				collisionOver = false;
				collisionHappened = true;
			}
			
			//checks for collision with each asteroid and bullet
			for(Bullet bb : ship.getBullets()) {
				if(asteroid.contains(bb.getCenter())) {
					asteroidsR.add(asteroid);
					bulletsR.add(bb);
				}
			}
		}
		if(collisionHappened && collisionOver) {
			shipLives--;
			collisionHappened = false;
		}
		
		//paints ship in colors signifying collision or not
		if(cStatus == true) {
			ship.paint(brush, Color.RED);
			this.cStatus = false;
		}
		else {
			ship.paint(brush, Color.cyan);
			collisionOver = true;
		}

		ship.move();
		
		//for each to paint the stars
		for(Star star : stars) {
			int mod = starCounter % 15;
			if(mod < 3) {
				star.paint(brush, Color.pink);
			}
			if(mod >= 3 && mod < 6) {
				star.paint(brush, Color.RED);
			}
			if(mod >= 6 && mod < 9) {
				star.paint(brush, Color.ORANGE);
			}
			if(mod >= 9 && mod < 12) {
				star.paint(brush, Color.GREEN);
			}
			if(mod >= 12 && mod < 15) {
				star.paint(brush, Color.BLUE);
			}
			
		}
		
		//creates the bullets in game
		for(Bullet b : ship.getBullets()) {
			b.paint(brush, Color.GREEN);
			b.move();
			
			//adds bullet to array to be removed
			if(b.outOfBounds()) {
				bulletsR.add(b);
			}
		}
		
		for(Asteroid Ra : asteroidsR) {
			randomAsteroids.remove(Ra);
		}
		
		//for each bullet added to temp array delete from the 
		//original array in ship
		for(Bullet Rb : bulletsR) {
			ship.getBullets().remove(Rb);
		}
		//use clear to delete all bullets from temporary array
		bulletsR.clear();
		
		if(shipLives < 1) {
			super.on = false;
			brush.setColor(Color.black);
			brush.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
			brush.setColor(Color.white);
			brush.drawString("LOSER",375,275);
		}
		
		if(randomAsteroids.isEmpty()) {
			super.on = false;
			brush.setColor(Color.black);
			brush.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
			brush.setColor(Color.white);
			brush.drawString("!!!YOU WON!!!",375,275);
		}
		
	} //end of paint method
	
	// Create a certain number of stars with a given max radius
	public Star[] createStars(int numberOfStars, int maxRadius) {
	 	Star[] stars = new Star[numberOfStars];
	 	for(int i = 0; i < numberOfStars; ++i) {
	 		Point center = new Point
	 		(Math.random() * SCREEN_WIDTH, Math.random() * SCREEN_HEIGHT);


	 		int radius = (int) (Math.random() * maxRadius);
	 		if(radius < 1) {
	 			radius = 1;
	 		}
	 		stars[i] = new Star(center, radius);
	 	}


	 	return stars;
	}


	public static void main (String[] args) {
		Asteroids a = new Asteroids();
		a.repaint();
	}
}