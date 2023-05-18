<?php

namespace Flynt\Components\BlockFixedPageText;

use Flynt\FieldVariables;

function getACFLayout()
{
    return [
        'name' => 'BlockFixedPageText',
        'label' => __('Block: Fixed Page (Text Only)', 'flynt'),
        'sub_fields' => [
            [
                'label' => __('General', 'flynt'),
                'name' => 'generalTab',
                'type' => 'tab',
                'placement' => 'top',
                'endpoint' => 0,
            ],
            [
                'label' => __('Columns', 'flynt'),
                'name' => 'repeaterText',
                'type' => 'repeater',
                'layout' => 'row',
                'min' => 1,
                'button_label' => __('Add Column', 'flynt'),
                'sub_fields' => [
                    [
                        'label' => __('Title', 'flynt'),
                        'name' => 'title',
                        'type' => 'text',
                        'delay' => 1,
                        'media_upload' => 0,
                        'required' => 0,
                        'wrapper' =>  [
                            'width' => 100,
                        ],
                    ],
                    [
                        'label' => __('Content', 'flynt'),
                        'name' => 'contentHtml',
                        'type' => 'wysiwyg',
                        'delay' => 1,
                        'media_upload' => 0,
                        'required' => 0,
                        'wrapper' =>  [
                            'width' => 100,
                        ],
                    ],
                ],
            ],
        ]
    ];
}
