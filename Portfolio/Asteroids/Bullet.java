import java.awt.Color;
import java.awt.Graphics;
import java.awt.*;


public class Bullet extends Circle {
	
	//radius of bullets
	private static final int RADIUS = 3;
	//private radius variable
	private double rotation;
	
	public Bullet(Point center, double rotation) {
		super(center, RADIUS);
		this.rotation = rotation;
	}

	@Override
	public void paint(Graphics brush, Color color) {
		brush.setColor(color);
		brush.fillOval((int) center.x, (int) center.y, RADIUS, RADIUS);
	}

	@Override
	public void move() {
		center.x += 3 * Math.cos(Math.toRadians(rotation));
		center.y += 3 * Math.sin(Math.toRadians(rotation));

	}
	
	public Point getCenter() {
		return center;
	}
	
	public boolean outOfBounds() {
        return (center.x < 0 || center.x > Asteroids.SCREEN_WIDTH ||  center.y < 0 || center.y > Asteroids.SCREEN_HEIGHT);
	}
}
