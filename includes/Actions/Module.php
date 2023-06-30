<?php


namespace Jet_FB_GW_Subscription\Actions;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

use Jet_Form_Builder\Actions\Manager;

class Module {

	public function init_hooks() {
		add_action(
			'jet-form-builder/actions/register',
			array( $this, 'add_cancel_subscription_action' )
		);
	}

	public function remove_hooks() {
		remove_action(
			'jet-form-builder/actions/register',
			array( $this, 'add_cancel_subscription_action' )
		);
	}

	public function add_cancel_subscription_action( Manager $manager ) {
		$manager->register_action_type( new UpdateSubscriptionAction() );
	}

}