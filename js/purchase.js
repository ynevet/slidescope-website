/**
 * SlideScope Purchase Integration
 * Handles Stripe checkout for license purchases
 */

// Update this with your Vercel API URL after deployment
const API_URL = 'https://your-vercel-app.vercel.app/api';

/**
 * Create Stripe checkout session and redirect to payment
 */
async function purchaseLicense(email) {
  try {
    // Show loading state
    const button = document.getElementById('purchase-button');
    if (button) {
      button.disabled = true;
      button.textContent = 'Processing...';
    }

    // Create checkout session
    const response = await fetch(`${API_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create checkout session');
    }

    const data = await response.json();

    // Redirect to Stripe checkout
    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error('No checkout URL received');
    }
  } catch (error) {
    console.error('Purchase error:', error);
    alert(`Purchase failed: ${error.message}`);
    
    // Reset button
    const button = document.getElementById('purchase-button');
    if (button) {
      button.disabled = false;
      button.textContent = 'Purchase License - $49/year';
    }
  }
}

/**
 * Handle purchase button click
 */
function handlePurchaseClick() {
  const emailInput = document.getElementById('purchase-email');
  const email = emailInput?.value || '';

  // Validate email
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address');
    return;
  }

  purchaseLicense(email);
}

/**
 * Initialize purchase form
 */
function initPurchaseForm() {
  const purchaseButton = document.getElementById('purchase-button');
  if (purchaseButton) {
    purchaseButton.addEventListener('click', handlePurchaseClick);
  }

  // Allow Enter key to submit
  const emailInput = document.getElementById('purchase-email');
  if (emailInput) {
    emailInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handlePurchaseClick();
      }
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPurchaseForm);
} else {
  initPurchaseForm();
}
