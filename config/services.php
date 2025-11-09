<?php

return [
    'nasa' => [
        'api_key' => env('NASA_API_KEY', 'DEMO_KEY'),
        'base_url' => env('NASA_API_BASE_URL', 'https://api.nasa.gov'),
        'cache_duration' => env('CACHE_DURATION', 3600), // 1 hour in seconds
    ],
];
