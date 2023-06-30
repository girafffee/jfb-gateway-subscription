<?php


namespace Jet_FB_GW_Subscription\Actions;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

use Jet_FB_Paypal\ApiActions\CancelSubscriptionAction;
use Jet_FB_Paypal\QueryViews\SubscriptionsView;
use Jet_FB_Paypal\Resources\Subscription;
use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Paypal;

class UpdateSubscriptionAction extends Base {

	public function get_id() {
		return 'update_gw_subscription';
	}

	public function get_name() {
		return __( 'Cancel Subscription', 'jet-form-builder' );
	}

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return mixed|void
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		$field           = $this->settings['field'] ?? '';
		$subscription_id = jet_fb_action_handler()->request_data[ $field ] ?? 0;

		if ( ! $subscription_id ) {
			throw new Action_Exception( 'Invalid subscription ID' );
		}

		try {
			$subscription = SubscriptionsView::findById( $subscription_id );
		} catch ( Query_Builder_Exception $exception ) {
			throw new Action_Exception( $exception->getMessage(), ...$exception->get_additional() );
		}

		$resource = new Subscription( $subscription );

		if (
			! current_user_can( 'manage_options' ) &&
			$resource->get_user()->ID !== get_current_user_id()
		) {
			throw new Action_Exception(
				'Not enough capabilities',
				'not admin || not subscriber'
			);
		}

		try {
			$token = Paypal\Controller::get_token_by_form_id( $resource->get_form_id() );

			( new CancelSubscriptionAction() )
				->set_bearer_auth( $token )
				->set_path( $subscription )
				->request()
				->check_response_code();

		} catch ( Gateway_Exception $exception ) {
			throw new Action_Exception(
				$exception->getMessage(),
				...$exception->get_additional()
			);
		}

		return $resource;
	}

}
