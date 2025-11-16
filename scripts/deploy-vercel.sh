#!/bin/bash

# Campus Dirasa - Vercel Deployment Script
# This script helps automate the Vercel deployment process

set -e  # Exit on error

echo "🚀 Campus Dirasa - Vercel Deployment Helper"
echo "==========================================="
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo "✅ Vercel CLI found"
echo ""

# Check if logged in
echo "📝 Checking Vercel login status..."
if ! vercel whoami &> /dev/null; then
    echo "🔑 Please login to Vercel:"
    vercel login
fi

echo "✅ Logged in to Vercel"
echo ""

# Generate NEXTAUTH_SECRET if not exists
echo "🔐 Checking NEXTAUTH_SECRET..."
if [ ! -f .env.local ]; then
    echo "⚠️  No .env.local found. Creating one..."
    SECRET=$(openssl rand -base64 32)
    echo "NEXTAUTH_SECRET=$SECRET" > .env.local
    echo "NEXTAUTH_URL=http://localhost:3000" >> .env.local
    echo "✅ Created .env.local with generated secret"
else
    echo "✅ .env.local exists"
fi

echo ""
echo "🔍 Running tests before deployment..."
npm test -- --run || {
    echo "⚠️  Tests failed. Continue anyway? (y/n)"
    read -r response
    if [ "$response" != "y" ]; then
        echo "❌ Deployment cancelled"
        exit 1
    fi
}

echo ""
echo "🏗️  Building project locally to verify..."
npm run build || {
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
}

echo "✅ Build successful"
echo ""

echo "🚀 Ready to deploy!"
echo ""
echo "Choose deployment type:"
echo "1) Preview deployment (for testing)"
echo "2) Production deployment"
echo ""
read -p "Enter choice (1 or 2): " choice

case $choice in
    1)
        echo "📦 Deploying preview..."
        vercel
        ;;
    2)
        echo "🌐 Deploying to production..."
        vercel --prod
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 Post-deployment checklist:"
echo "  1. Update NEXTAUTH_URL in Vercel environment variables"
echo "  2. Test authentication on the deployed site"
echo "  3. Verify all API routes work"
echo "  4. Test file uploads"
echo ""
echo "🎉 Done!"
