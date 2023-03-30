<?php

namespace Flynt\Components\SliderHorizontal;

use Flynt\FieldVariables;
use Flynt\Utils\Options;

function getACFLayout()
{
    return [
        'name' => 'SliderHorizontal',
        'label' => __('Slider: Horizontal', 'flynt'),
        'sub_fields' => [
            [
                'label' => __('General', 'flynt'),
                'name' => 'generalTab',
                'type' => 'tab',
                'placement' => 'top',
                'endpoint' => 0
            ],
            [
                'label' => __('Item', 'flynt'),
                'name' => 'itemPanels',
                'type' => 'repeater',
                'layout' => 'row',
                'min' => 1,
                'button_label' => __('Add Item', 'flynt'),
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
                        'name' => 'title',
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
