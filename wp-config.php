<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'website_wp' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '%d[n8oV>1z~H+a&XMQ|Uooz;zH*Jg cnRK,A,,_K0kyC^Sff_(ILR6#j]q4XkH`c' );
define( 'SECURE_AUTH_KEY',  '<:CUlaH/]byu:/[}Y^Hi73xU*][]~_zQ2O.]W:$BD|]|4PA^K O|dTZe>nG^0}Kn' );
define( 'LOGGED_IN_KEY',    'Pn4I)mLaM-C<UQpj GzM[YG<6nV3O1luWJyw(6R+tRaHN$Tk|HFMF^SRg|VMVcEv' );
define( 'NONCE_KEY',        'Be#,N.L}24G{kxutS~FS1jt.1j^h?};4d86>rPIe5LNiM79.:D,4WxNu:2xZK_ZA' );
define( 'AUTH_SALT',        'uO.uUQ]0Y{n^{z#~1@3XMdQxuJ2.[x$ FD$l!gHeAkfA2,9saedEAlt=F7r+I,<r' );
define( 'SECURE_AUTH_SALT', 'zr[cm9Mt/uAc8^8g|XaVI6/OX&cUsB>QY9L.PuIkBl]k<cy@>ox)^v];/wJGl~`H' );
define( 'LOGGED_IN_SALT',   'Sb_BpnoCD3@CBc#u_O``Cv8A_LeZ^yQD@&fa4_s!,N2paA-o(|aI&^hSBs0jmAEv' );
define( 'NONCE_SALT',       '&Biv]O1/;Q2#]>f{e_kT3n&9PBt`O4E7o)jAuitgmu!rdKn-?{&)E2!n.V6q%9MN' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
