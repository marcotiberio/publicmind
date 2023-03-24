<?php

namespace Flynt\Components\BlockImageLink;

use Flynt\FieldVariables;

function getACFLayout()
{
    return [
        'name' => 'BlockImageLink',
        'label' => 'Block: Artist Image Link',
        'sub_fields' => [
            [
                'label' => __('General', 'flynt'),
                'name' => 'generalTab',
                'type' => 'tab',
                'placement' => 'top',
                'endpoint' => 0,
            ],
            [
                'label' => __('Image', 'flynt'),
                'name' => 'boxes',
                'type' => 'repeater',
                'layout' => 'block',
                'min' => 1,
                'button_label' => __('Add Image', 'flynt'),
                'sub_fields' => [
                    [
                        'label' => __('Image', 'flynt'),
                        'name' => 'image',
                        'type' => 'image',
                        'preview_size' => 'medium',
                        'instructions' => __('Image-Format: JPG, PNG, SVG.', 'flynt'),
                        'required' => 0,
                        'mime_types' => 'jpg,jpeg,png,svg',
                        'wrapper' =>  [
                            'width' => '50',
                        ]
                    ],
                    [
                        'label' => __('Link', 'flynt'),
                        'name' => 'blockLink',
                        'type' => 'page_link',
                        'return_format' => 'array',
                        'wrapper' =>  [
                            'width' => '50',
                        ]
                    ]
                ],
            ],
        ]
    ];
}
