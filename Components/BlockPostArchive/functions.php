<?php

namespace Flynt\Components\BlockPostArchive;

use Flynt\FieldVariables;
use Flynt\Utils\Options;
use Timber\Timber;

function getACFLayout()
{
    return [
        'name' => 'BlockPostArchive',
        'label' => 'Block: Post Archive',
        'sub_fields' => [
            [
                'label' => __('Post', 'flynt'),
                'name' => 'post',
                'type' => 'post_object',
                'post_type' => [
                    'artist'
                ],
                'allow_null' => 0,
                'multiple' => 1,
                'return_format' => 'object',
                'ui' => 1,
                'required' => 0,
                'wrapper' => [
                    'width' => 100,
                ],
            ]
        ]
    ];
}
