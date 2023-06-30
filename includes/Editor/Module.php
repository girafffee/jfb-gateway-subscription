<?php


namespace Jet_FB_GW_Subscription\Editor;

use Jet_FB_GW_Subscription\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

class Module {

	public function init_hooks() {
		add_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'add_editor_script' )
		);
	}

	public function remove_hooks() {
		add_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'add_editor_script' )
		);
	}

	public function add_editor_script() {
		wp_enqueue_script(
			Plugin::instance()->get_slug(),
			Plugin::instance()->plugin_url( 'assets/build/js/editor{min}.js' ),
			array(),
			Plugin::instance()->get_version(),
			true
		);
	}
}