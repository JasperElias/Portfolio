
import java.awt.Color;
import java.awt.Graphics;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.ArrayList;
/**
 * 
 */

/**
 * @author jasper
 *
 */
public class Ship extends Polygon implements KeyListener {
	//booleans for ship movement
	private boolean forward;
	private boolean tLeft;
	private boolean tRight;
	
	private boolean bulletF = false;
	private boolean bullet = false;
	private ArrayList<Bullet> bullets;
	
	
	public Ship(Point[] shape, Point position, double rotation) {
		super(shape, position, rotation);
		bullets = new ArrayList<Bullet>();
	}
	
	public ArrayList<Bullet> getBullets() {
		return bullets;
	}

	@Override
	public void paint(Graphics brush, Color color) {
	
		Point[] pts = getPoints();
		int[] xpts = new int[pts.length];
		int[] ypts = new int[pts.length];
		int npts = pts.length;

		for (int i = 0; i < npts; i++) {
			xpts[i] = (int)pts[i].x;
			ypts[i] = (int)pts[i].y;
		}

		brush.setColor(color);
		brush.drawPolygon(xpts, ypts, npts);
		brush.fillPolygon(xpts, ypts, npts);
	}

	@Override
	public void move() {
		//creates new keyListener
		
		//moves forward
		if(this.forward == true) {
			
			position.x += 3 * Math.cos(Math.toRadians(rotation));
			position.y += 3 * Math.sin(Math.toRadians(rotation));
		
			/*
			 * boundary checkers
			 */
			//repositions ship moving right
			if(position.x > Asteroids.SCREEN_WIDTH) {
				position.x += Asteroids.SCREEN_WIDTH;
			}
			if(position.y > Asteroids.SCREEN_HEIGHT) {
				position.y -= Asteroids.SCREEN_HEIGHT;
			}
			
			//repositions ship moving left
			if(position.x < 0) {
				position.x += Asteroids.SCREEN_WIDTH;
			}
			if(position.y < 0) {
				position.y += Asteroids.SCREEN_HEIGHT;
			}
		
		}
		
		//rotation left
		if(this.tLeft == true) {
			super.rotate(-3);
    	}
	
			//rotation right
		if(this.tRight == true) {
			super.rotate(3);
		}	
		
		//check for bullet fired add it to arraylist
		if(bullet && !bulletF) {
			Point bPoint = getPoints()[3];
			bullets.add(new Bullet(bPoint, rotation));
			bulletF = true;
		}
		
		
	}//end of move method
	
	//keyListener methods
		
		@Override
		public void keyTyped(KeyEvent e) {
			return;
		}
	
		@Override
		public void keyPressed(KeyEvent e) {
			
			// up arrow key
			if(e.getKeyCode() == KeyEvent.VK_UP) {
				this.forward = true;
			}
			
			// left arrow key
			if(e.getKeyCode() == KeyEvent.VK_LEFT) {
				this.tLeft = true;
			}
			
			// right arrow key
			if(e.getKeyCode() == KeyEvent.VK_RIGHT) {
				this.tRight = true;
			}
			
			if(e.getKeyCode() == KeyEvent.VK_SPACE) {
				this.bullet = true;
			}
	
			
		}
	
		@Override
		public void keyReleased(KeyEvent e) {
			// up arrow key
			if(e.getKeyCode() == KeyEvent.VK_UP) {
				this.forward = false;
			}
			
			// left arrow key
			if(e.getKeyCode() == KeyEvent.VK_LEFT) {
				this.tLeft = false;
			}
			
			// right arrow key
			if(e.getKeyCode() == KeyEvent.VK_RIGHT) {
				this.tRight = false;
			}
			
			if(e.getKeyCode() == KeyEvent.VK_SPACE) {
				this.bulletF = false;
				this.bullet = false;
			}
		}
		
	//end of keylistener class

}
