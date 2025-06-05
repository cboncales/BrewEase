-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create coffees table (if it doesn't exist)
CREATE TABLE IF NOT EXISTS coffees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2),
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Insert sample coffee data (only if table is empty)
INSERT INTO coffees (name, description, price, image_url) 
SELECT * FROM (
    VALUES 
    ('Espresso', 'Rich and bold single shot of coffee', 45.00, 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=200&fit=crop'),
    ('Americano', 'Espresso diluted with hot water for a smooth taste', 55.00, 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=300&h=200&fit=crop'),
    ('Latte', 'Smooth espresso with steamed milk and light foam', 75.00, 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=300&h=200&fit=crop'),
    ('Cappuccino', 'Equal parts espresso, steamed milk, and foam', 70.00, 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop'),
    ('Macchiato', 'Espresso marked with a dollop of foamed milk', 65.00, 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=200&fit=crop'),
    ('Mocha', 'Chocolate-flavored coffee drink with steamed milk', 85.00, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop'),
    ('Cold Brew', 'Smooth and refreshing cold-steeped coffee', 60.00, 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=200&fit=crop'),
    ('Frappuccino', 'Blended iced coffee with whipped cream', 95.00, 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=200&fit=crop')
) AS v(name, description, price, image_url)
WHERE NOT EXISTS (SELECT 1 FROM coffees LIMIT 1); 