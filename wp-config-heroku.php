<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
$url = parse_url(getenv('DATABASE_URL') ? getenv('DATABASE_URL') : getenv('CLEARDB_DATABASE_URL'));

/** The name of the database for WordPress */
define('DB_NAME', trim($url['path'], '/'));

/** MySQL database username */
define('DB_USER', $url['user']);

/** MySQL database password */
define('DB_PASSWORD', $url['pass']);

/** MySQL hostname */
define('DB_HOST', $url['host']);

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         getenv('AUTH_KEY'));
define('SECURE_AUTH_KEY',  getenv('SECURE_AUTH_KEY'));
define('LOGGED_IN_KEY',    getenv('LOGGED_IN_KEY'));
define('NONCE_KEY',        getenv('NONCE_KEY'));
define('AUTH_SALT',        getenv('AUTH_SALT'));
define('SECURE_AUTH_SALT', getenv('SECURE_AUTH_SALT'));
define('LOGGED_IN_SALT',   getenv('LOGGED_IN_SALT'));
define('NONCE_SALT',       getenv('NONCE_SALT'));

// heroku config:set AUTH_KEY='isOh>h),lL%8Z{nnbmBVB&sIR1]ru$SrghZMCY#nT,xUqbHrXuAt9+9Pt)g/hhiJ'
// heroku config:set SECURE_AUTH_KEY='r!_#l14hfG^al~W2:S}BUhrPx,|LV+NYIQo$<w<|@l&5(pfk=Vr2tmNkRMY~{/42'
// heroku config:set LOGGED_IN_KEY='hCu{%IDPr2wB<sd-!-B5=eI$;3[=,6|*+oG&IsUPnY/jybl}caG8c_#^Ok@5oo,W'
// heroku config:set NONCE_KEY='gyC0ET_8FvuM1Ssu*I@Zohv:&U{oErK&[pG/Hhc3HQ6MHMn[~(:mzRa)FWKrtmjr'
// heroku config:set AUTH_SALT='==nqvtV]P5qod{YbM(tk1H2k%Q<RfC@kF`09=gQg=4>tZf7U:9W}06Ff?]O-7EpB'
// heroku config:set SECURE_AUTH_SALT='9lXGl?uQDm{[u=`=`X/hb6ov_3&;l)7RcEk:f$2^_$6=kl[-}A9fEo~(o~*gZdh]'
// heroku config:set LOGGED_IN_SALT='p2ok.WIVYi/]Em7(-%E8|x3xN]]wJR6{I8X^oTY:HKH)tn+3kvW<Bl%EwaZCe;uv'
// heroku config:set NONCE_SALT=';=74F/EjFo{10JotS31!]4<q#=]3)Y5)dST8XtL++#jr:vBtlW H!;!r?uR=<>T_'

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
