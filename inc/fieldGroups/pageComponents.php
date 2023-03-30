<?php

use ACFComposer\ACFComposer;
use Flynt\Components;

add_action('Flynt/afterRegisterComponents', function () {
    ACFComposer::registerFieldGroup([
        'name' => 'pageComponents',
        'title' => __('Page Components', 'flynt'),
        'style' => 'seamless',
        'fields' => [
            [
                'name' => 'pageComponents',
                'label' => __('Page Components', 'flynt'),
                'type' => 'flexible_content',
                'button_label' => __('Add Component', 'flynt'),
                'layouts' => [
                    Components\ArchiveArtists\getACFLayout(),
                    Components\BlockAnchor\getACFLayout(),
                    Components\BlockAnnouncement\getACFLayout(),
                    Components\BlockArtistSelector\getACFLayout(),
                    Components\BlockCollapse\getACFLayout(),
                    Components\BlockDivider\getACFLayout(),
                    Components\BlockFixedPage\getACFLayout(),
                    Components\BlockImage\getACFLayout(),
                    Components\BlockImageFullScreen\getACFLayout(),
                    Components\BlockImageLink\getACFLayout(),
                    Components\BlockImageText\getACFLayout(),
                    Components\BlockManifesto\getACFLayout(),
                    Components\BlockPostArchive\getACFLayout(),
                    Components\BlockPress\getACFLayout(),
                    Components\BlockVideoOembed\getACFLayout(),
                    Components\BlockWysiwyg\getACFLayout(),
                    Components\BlockWysiwygTwoCol\getACFLayout(),
                    Components\ColumnsPublications\getACFLayout(),
                    Components\ColumnsWysiwyg\getACFLayout(),
                    Components\GridImageText\getACFLayout(),
                    Components\GridPostsLatest\getACFLayout(),
                    Components\ListingEvents\getACFLayout(),
                    Components\ListingCurrentEvents\getACFLayout(),
                    Components\ListingPastEvents\getACFLayout(),
                    Components\ListingUpcomingEvents\getACFLayout(),
                    Components\ListingHomepage\getACFLayout(),
                    Components\ListComponents\getACFLayout(),
                    Components\SliderImages\getACFLayout(),
                    Components\SliderHorizontal\getACFLayout(),
                    Components\ReusableComponent\getACFLayout(),
                ],
            ],
        ],
        'location' => [
            [
                [
                    'param' => 'post_type',
                    'operator' => '!=',
                    'value' => 'post'
                ],
                [
                    'param' => 'post_type',
                    'operator' => '!=',
                    'value' => 'event'
                ],
                [
                    'param' => 'post_type',
                    'operator' => '!=',
                    'value' => 'artist'
                ],
                [
                    'param' => 'post_type',
                    'operator' => '!=',
                    'value' => 'interview'
                ],
                [
                    'param' => 'post_type',
                    'operator' => '!=',
                    'value' => 'release'
                ],
                [
                    'param' => 'post_type',
                    'operator' => '!=',
                    'value' => 'reusable-components'
                ],
            ],
        ],
    ]);
});
