<?php
    spl_autoload_register(function($class_name) {
        $prefix = "Luci\\Src\\";

        $base_dir = __DIR__ . '/src/';

        // if class have prefix
        $len = strlen($prefix);
        if (strncmp($prefix, $class_name, $len) !== 0) {
            return;
        }

        // get the relative class name
        $relative_class_name = substr($class_name, $len);

        // replace the namespace prefix with the base directory, replace namespace
        // separators with directory separators in the relative class name, append
        // with .php
        $file = $base_dir . str_replace('\\', '/', $relative_class_name) . '.php';

        // if the file exists, require it
        if (file_exists($file)) {
            require $file;
        }
    });

