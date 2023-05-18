<?php

namespace Flynt\Components\BlockNewsItem;

use Flynt\FieldVariables;

function getACFLayout()
{
    return [
        'name' => 'BlockNewsItem',
        'label' => __('Block: News Item', 'flynt'),
        'sub_fields' => [
            [
                'label' => __('General', 'flynt'),
                'name' => 'generalTab',
                'type' => 'tab',
                'placement' => 'top',
                'endpoint' => 0,
            ],
            [
                'label' => __('Title', 'flynt'),
                'name' => 'title',
                'type' => 'text',
                'wrapper' =>  [
                    'width' => 50,
                ],
            ],
            [
                'label' => __('Date', 'flynt'),
                'name' => 'date',
                'type' => 'date_picker',
                'display_format' => 'Y.m.d',
                'return_format' => 'Y.m.d',
                'first_day' => 1,
                'wrapper' =>  [
                    'width' => 50,
                ],
            ],
            [
                'label' => __('Image', 'flynt'),
                'instructions' => __('Image-Format: JPG, PNG, SVG.', 'flynt'),
                'name' => 'image',
                'type' => 'image',
                'preview_size' => 'medium',
                'required' => 1,
                'mime_types' => 'jpg,jpeg,png,svg',
                'wrapper' =>  [
                    'width' => 30,
                ],
            ],
            [
                'label' => __('Description', 'flynt'),
                'name' => 'contentHtml',
                'type' => 'wysiwyg',
                'delay' => 1,
                'media_upload' => 0,
                'required' => 1,
                'wrapper' =>  [
                    'width' => 70,
                ],
            ],
            [
                'label' => 'Link',
                'name' => 'buttonLink',
                'type' => 'link',
                'return_format' => 'array',
                'wrapper' => [
                    'width' => 100
                ]
            ],
        ]
    ];
}
