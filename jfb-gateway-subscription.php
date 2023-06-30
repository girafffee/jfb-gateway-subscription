<?php
/**
 * Plugin Name: JetFormBuilder Gateway Subscription (Cancel action)
 * Plugin URI:  https://jetformbuilder.com/#
 * Description: A lightweight addon that adds an unsubscribe action to a JetFormBuilder form
 * Version:     1.0.0
 * Author:      Crocoblock
 * Author URI:  https://crocoblock.com/
 * Text Domain: jfb-gateway-subscription
 * License:     GPL-3.0+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 * Domain Path: /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

define( 'JET_FB_GW_SUBSCRIPTION_VERSION', '1.0.0' );

define( 'JET_FB_GW_SUBSCRIPTION__FILE__', __FILE__ );
define( 'JET_FB_GW_SUBSCRIPTION_PLUGIN_BASE', plugin_basename( __FILE__ ) );
define( 'JET_FB_GW_SUBSCRIPTION_PATH', plugin_dir_path( __FILE__ ) );
define( 'JET_FB_GW_SUBSCRIPTION_URL', plugins_url( '/', __FILE__ ) );

require JET_FB_GW_SUBSCRIPTION_PATH . 'vendor/autoload.php';

if ( version_compare( PHP_VERSION, '7.0.0', '>=' ) ) {
	add_action( 'jet-form-builder/before-init', function () {
		\Jet_FB_GW_Subscription\Plugin::instance();
	} );
} else {
	add_action( 'admin_notices', function () {
		$class   = 'notice notice-error';
		$message = __(
			'<b>Error:</b> <b>JetFormBuilder Paypal Subscription (Cancel action)</b> plugin requires a PHP version ">= 7.0.0" to work properly!',
			'jfb-paypal-subscription'
		);
		printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), wp_kses_post( $message ) );
	} );
}