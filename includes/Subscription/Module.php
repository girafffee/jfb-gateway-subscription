<?php


namespace Jet_FB_GW_Subscription\Subscription;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

use Jet_FB_Paypal\Resources\Subscription;

class Module {

	const FIELD_VALUE = 'gateway_subscription_id';

	public function init_hooks() {
		add_action(
			'jet-form-builder/gateways/after-save',
			array( $this, 'after_save_subscription' ),
			10,
			2
		);
		add_filter(
			'jet-form-builder/editor/hidden-field/config',
			array( $this, 'add_new_source_for_hidden_field' )
		);
	}

	public function remove_hooks() {
		remove_action(
			'jet-form-builder/gateways/after-save',
			array( $this, 'after_save_subscription' )
		);
		remove_filter(
			'jet-form-builder/editor/hidden-field/config',
			array( $this, 'add_new_source_for_hidden_field' )
		);
	}

	public function after_save_subscription( $id, $subscription ) {
		if ( ! is_a( $subscription, Subscription::class ) ) {
			return;
		}

		$types      = jet_fb_request_handler()->get_types();
		$field_name = '';

		foreach ( $types as $name => $type ) {
			if ( 'hidden-field' !== $type ) {
				continue;
			}
			$field_value = jet_fb_request_handler()->get_attr( $name, 'field_value' );

			if ( self::FIELD_VALUE !== $field_value ) {
				continue;
			}
			$field_name = $name;
			break;
		}

		if ( ! $field_name ) {
			return;
		}

		jet_fb_action_handler()->request_data[ $field_name ] = $id;
	}

	public function add_new_source_for_hidden_field( array $config ): array {
		$config['sources'][] = array(
			'value' => self::FIELD_VALUE,
			'label' => __( 'Gateways Subscription ID', 'jet-form-builder' ),
		);

		return $config;
	}

}
