<?php


namespace Jet_FB_GW_Subscription;

use Jet_FB_GW_Subscription\Actions;
use Jet_FB_GW_Subscription\Editor;
use Jet_FB_GW_Subscription\Subscription;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

class Plugin {
	/**
	 * Instance.
	 *
	 * Holds the plugin instance.
	 *
	 * @since 1.0.0
	 * @access public
	 * @static
	 *
	 * @var Plugin
	 */
	private static $instance = null;
	private $slug            = 'jfb-gateway-subscription';

	/** @var Actions\Module */
	private $actions;
	/** @var Editor\Module */
	private $editor;
	/** @var Subscription\Module */
	private $subscription;

	private function __construct() {
		// is installed jet-form-builder-paypal-subscriptions (paid addon)
		if ( ! defined( 'JET_FB_PAYPAL_VERSION' ) ) {
			return;
		}

		$this->actions      = new Actions\Module();
		$this->editor       = new Editor\Module();
		$this->subscription = new Subscription\Module();

		$this->actions->init_hooks();
		$this->editor->init_hooks();
		$this->subscription->init_hooks();
	}

	public function get_version(): string {
		return JET_FB_GW_SUBSCRIPTION_VERSION;
	}

	public function plugin_url( $path ): string {
		$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
		$path   = str_replace( '{min}', $suffix, $path );

		return JET_FB_GW_SUBSCRIPTION_URL . $path;
	}

	public function plugin_dir( $path = '' ): string {
		return JET_FB_GW_SUBSCRIPTION_PATH . $path;
	}

	/**
	 * Instance.
	 *
	 * Ensures only one instance of the plugin class is loaded or can be loaded.
	 *
	 * @return Plugin An instance of the class.
	 * @since 1.0.0
	 * @access public
	 * @static
	 */
	public static function instance(): Plugin {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * @return string
	 */
	public function get_slug(): string {
		return $this->slug;
	}

	/**
	 * @return Actions\Module
	 */
	public function get_actions(): Actions\Module {
		return $this->actions;
	}

	/**
	 * @return Editor\Module
	 */
	public function get_editor(): Editor\Module {
		return $this->editor;
	}

	/**
	 * @return Subscription\Module
	 */
	public function get_subscription(): Subscription\Module {
		return $this->subscription;
	}
}
