<?php

use Timber\Timber;

$context = Timber::context();

Timber::render('templates/page-archive.twig', $context);
