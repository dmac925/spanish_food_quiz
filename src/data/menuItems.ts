export interface MenuItem {
  spanish: string;
  english: string;
  category: string;
  description: string;
}

export const menuItems: MenuItem[] = [
  {
    spanish: "Paella de Mariscos",
    english: "Seafood Paella",
    category: "main course",
    description: "Traditional Spanish rice dish with various seafood, saffron, and vegetables"
  },
  {
    spanish: "Tortilla Española",
    english: "Spanish Omelette",
    category: "appetizer",
    description: "Classic potato and onion omelette, a staple of Spanish cuisine"
  },
  {
    spanish: "Gazpacho",
    english: "Cold Tomato Soup",
    category: "soup",
    description: "Refreshing cold soup made with ripe tomatoes, peppers, and cucumber"
  },
  {
    spanish: "Albóndigas",
    english: "Meatballs",
    category: "tapas",
    description: "Seasoned meatballs served in a rich tomato sauce"
  },
  {
    spanish: "Patatas Bravas",
    english: "Spicy Potatoes",
    category: "tapas",
    description: "Crispy potato cubes served with spicy tomato sauce and aioli"
  },
  {
    spanish: "Jamón Ibérico",
    english: "Iberian Ham",
    category: "appetizer",
    description: "Premium dry-cured ham from black Iberian pigs"
  },
  {
    spanish: "Churros con Chocolate",
    english: "Churros with Chocolate",
    category: "dessert",
    description: "Fried dough pastries served with thick hot chocolate"
  },
  {
    spanish: "Calamares Fritos",
    english: "Fried Squid",
    category: "tapas",
    description: "Crispy fried squid rings served with lemon and aioli"
  },
  {
    spanish: "Crema Catalana",
    english: "Catalan Cream",
    category: "dessert",
    description: "Traditional custard dessert with caramelized sugar top"
  },
  {
    spanish: "Gambas al Ajillo",
    english: "Garlic Shrimp",
    category: "tapas",
    description: "Shrimp sautéed in garlic, olive oil, and chili"
  }
];