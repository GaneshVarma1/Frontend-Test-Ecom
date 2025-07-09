# Next.js Ecommerce

A modern ecommerce application built with Next.js, TypeScript, and Tailwind CSS.

## About This Project

I saw the example repo you gave and went to the code using API. I have no way to connect to you to ask about should I use the API you provided. I saw it same, you just added images, so I made everything from start and added my own products and things. I can also make any changes if you want. Interested in joining the team? Need any changes? Please reach out at **sriganeshshiram@gmail.com**

My work at [srishiram.xyz](https://srishiram.xyz)


## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── products/       # Products pages
│   ├── product/[id]/   # Dynamic product pages
│   ├── cart/           # Cart page
│   ├── about/          # About page
│   └── contact/        # Contact page
├── components/         # React components
├── context/           # React context providers
├── data/              # Sample data
├── hooks/             # Custom hooks
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## Pages

- **Home** (`/`) - Landing page with hero section and featured products
- **Products** (`/products`) - Product catalog with filtering and search
- **Product Detail** (`/product/[id]`) - Individual product page
- **Cart** (`/cart`) - Shopping cart
- **About** (`/about`) - Company information

## API Used

This project uses the [Fake Store API](https://fakestoreapi.com/) to fetch real product data for the products listing, product details, and featured products sections.


