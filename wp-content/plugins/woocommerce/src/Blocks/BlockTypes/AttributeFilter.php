<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * AttributeFilter class.
 */
class AttributeFilter extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name             = 'attribute-filter';
	const FILTER_QUERY_VAR_PREFIX     = 'filter_';
	const QUERY_TYPE_QUERY_VAR_PREFIX = 'query_type_';

	/**
	 * Extra data passed through from server to client for block.
	 *
	 * @param array $attributes  Any attributes that currently are available from the block.
	 *                           Note, this will be empty in the editor context when the block is
	 *                           not in the post content on editor load.
	 */
	protected function enqueue_data( array $attributes = [] ) {
		parent::enqueue_data( $attributes );
		$this->asset_data_registry->add( 'attributes', array_values( wc_get_attribute_taxonomies() ) );
	}

	/**
	 * Get the frontend style handle for this block type.
	 *
	 * @return string[]
	 */
	protected function get_block_type_style() {
		return array_merge( parent::get_block_type_style(), [ 'wc-blocks-packages-style' ] );
	}
}
