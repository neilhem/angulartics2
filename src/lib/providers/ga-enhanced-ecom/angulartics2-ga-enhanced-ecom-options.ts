/**
 * Product and Promotion Actions
 *
 * Actions specify how to interpret product and promotion data that you send to Google Analytics.
 */

export type GaEnhancedEcomAction =
  'click'           |   // A click on a product or product link for one or more products.
    'detail'          |   // A view of product details.
    'add'             |   // Adding one or more products to a shopping cart.
    'remove'          |   // Remove one or more products from a shopping cart.
    'checkout'        |   // Initiating the checkout process for one or more products.
    'checkout_option' |   // Sending the option value for a given checkout step.
    'purchase'        |   // The sale of one or more products.
    'refund'          |   // The refund of one or more products.
    'promo_click'	        // A click on an internal promotion.
  ;

/**
 * Impression Data
 *
 * Represents information about a product that has been viewed. It is
 * referred to as an impressionFieldObject and contains the following values.
 *
 * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#impression-data
 */
export interface GaEnhancedEcomImpressionFieldObject {
  id?: string; // The product ID or SKU (e.g. P67890). *Either this field or name must be set.
  name?: string; // The name of the product (e.g. Android T-Shirt). *Either this field or id must be set.
  list?: string; // The list or collection to which the product belongs (e.g. Search Results)
  brand?: string; // The brand associated with the product (e.g. Google).
  category?: string; // The category to which the product belongs (e.g. Apparel). Use / as a delimiter to specify up to 5-levels of hierarchy (e.g. Apparel/Men/T-Shirts).
  variant?: string; // The variant of the product (e.g. Black).
  position?: number; // The product's position in a list or collection (e.g. 2).
  price?: number; // The price of a product (e.g. 29.20).
}

/**
 * Product Data
 *
 * Product data represents individual products that were viewed, added
 * to the shopping cart, etc. It is referred to as a productFieldObject
 * and contains the following values.
 *
 * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#product-data
 */
export interface GaEnhancedEcomProductFieldObject {
  id?: string; // The product ID or SKU (e.g. P67890). *Either this field or name must be set.
  name?: string; // The name of the product (e.g. Android T-Shirt). *Either this field or id must be set.
  brand?: string; // The brand associated with the product (e.g. Google).
  category?: string; // The category to which the product belongs (e.g. Apparel). Use / as a delimiter to specify up to 5-levels of hierarchy (e.g. Apparel/Men/T-Shirts).
  variant?: string; // The variant of the product (e.g. Black).
  price?: number; // The price of a product (e.g. 29.20).
  quantity?: number; // The quantity of a product (e.g. 2).
  coupon?: string; // The coupon code associated with a product (e.g. SUMMER_SALE13).
  position?: number; // The product's position in a list or collection (e.g. 2).
}

/**
 * Promotion Data
 *
 * Represents information about a promotion that has been viewed.
 * It is referred to a promoFieldObject and contains the following values.
 *
 * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#promotion-data
 */
export interface GaEnhancedEcomPromoFieldObject {
  id?: string; // The promotion ID (e.g. PROMO_1234). *Either this field or name must be set.
  name?: string; // The name of the promotion (e.g. Summer Sale). *Either this field or id must be set.
  creative?: string; // The creative associated with the promotion (e.g. summer_banner2).
  position?: string; // The position of the creative (e.g. banner_slot_1).
}

/**
 * Action Data
 *
 * Represents information about an ecommerce related action
 * that has taken place. It is referred to as an actionFieldObject
 * and contains the following values.
 *
 * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#action-data
 */
export interface GaEnhancedEcomActionFieldObject {
  id?: string; // The transaction ID (e.g. T1234). *Required if the action type is purchase or refund.
  affilation?: string; // The store or affiliation from which this transaction occurred (e.g. Google Store).
  revenue?: number; // Specifies the total revenue or grand total associated with the transaction (e.g. 11.99). This value may include shipping, tax costs, or other adjustments to total revenue that you want to include as part of your revenue calculations. Note: if revenue is not set, its value will be automatically calculated using the product quantity and price fields of all products in the same hit.
  tax?: number; // The total tax associated with the transaction.
  shipping?: number; // The shipping cost associated with the transaction.
  coupon?: string; // The transaction coupon redeemed with the transaction.
  list?: string; // The list that the associated products belong to. Optional.
  step?: number; // A number representing a step in the checkout process. Optional on checkout actions.
  option?: string; // Additional field for checkout and checkout_option actions that can describe option information on the checkout page, like selected payment method.
}
