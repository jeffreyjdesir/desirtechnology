
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const LESSOPEN: string;
	export const QT_SCALE_FACTOR: string;
	export const USER: string;
	export const LC_TIME: string;
	export const npm_config_user_agent: string;
	export const XDG_SEAT: string;
	export const SSH_AGENT_PID: string;
	export const XDG_SESSION_TYPE: string;
	export const GIT_ASKPASS: string;
	export const WAVETERM_VERSION: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const HOME: string;
	export const CHROME_DESKTOP: string;
	export const TERM_PROGRAM_VERSION: string;
	export const DESKTOP_SESSION: string;
	export const NVM_BIN: string;
	export const NVM_INC: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT_PATH: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const LC_MONETARY: string;
	export const NIX_PROFILES: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const COLORTERM: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const NVM_DIR: string;
	export const LOGNAME: string;
	export const _: string;
	export const XDG_SESSION_CLASS: string;
	export const npm_config_registry: string;
	export const TERM: string;
	export const GTK_OVERLAY_SCROLLING: string;
	export const XDG_SESSION_ID: string;
	export const WAVETERM_WSHBINDIR: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const XDG_SESSION_PATH: string;
	export const WAVETERM: string;
	export const LC_ADDRESS: string;
	export const XDG_RUNTIME_DIR: string;
	export const GDK_BACKEND: string;
	export const npm_config_frozen_lockfile: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const LC_TELEPHONE: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const TERM_PROGRAM: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const SHELL: string;
	export const LC_NAME: string;
	export const GOPATH: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const npm_config_verify_deps_before_run: string;
	export const NODE_PATH: string;
	export const QT_ACCESSIBILITY: string;
	export const GDMSESSION: string;
	export const LESSCLOSE: string;
	export const NIX_SSL_CERT_FILE: string;
	export const LC_MEASUREMENT: string;
	export const GPG_AGENT_INFO: string;
	export const LC_IDENTIFICATION: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const XDG_VTNR: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_DATA_DIRS: string;
	export const LC_NUMERIC: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const MATE_DESKTOP_SESSION_ID: string;
	export const LC_PAPER: string;
	export const WAVETERM_SWAPTOKEN: string;
	export const QT_FONT_DPI: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		LESSOPEN: string;
		QT_SCALE_FACTOR: string;
		USER: string;
		LC_TIME: string;
		npm_config_user_agent: string;
		XDG_SEAT: string;
		SSH_AGENT_PID: string;
		XDG_SESSION_TYPE: string;
		GIT_ASKPASS: string;
		WAVETERM_VERSION: string;
		npm_node_execpath: string;
		SHLVL: string;
		HOME: string;
		CHROME_DESKTOP: string;
		TERM_PROGRAM_VERSION: string;
		DESKTOP_SESSION: string;
		NVM_BIN: string;
		NVM_INC: string;
		GTK_MODULES: string;
		XDG_SEAT_PATH: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		LC_MONETARY: string;
		NIX_PROFILES: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		COLORTERM: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		NVM_DIR: string;
		LOGNAME: string;
		_: string;
		XDG_SESSION_CLASS: string;
		npm_config_registry: string;
		TERM: string;
		GTK_OVERLAY_SCROLLING: string;
		XDG_SESSION_ID: string;
		WAVETERM_WSHBINDIR: string;
		npm_config_node_gyp: string;
		PATH: string;
		SESSION_MANAGER: string;
		npm_package_name: string;
		NODE: string;
		XDG_SESSION_PATH: string;
		WAVETERM: string;
		LC_ADDRESS: string;
		XDG_RUNTIME_DIR: string;
		GDK_BACKEND: string;
		npm_config_frozen_lockfile: string;
		DISPLAY: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		LC_TELEPHONE: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		VSCODE_GIT_IPC_HANDLE: string;
		TERM_PROGRAM: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		XDG_GREETER_DATA_DIR: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		SHELL: string;
		LC_NAME: string;
		GOPATH: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		npm_config_verify_deps_before_run: string;
		NODE_PATH: string;
		QT_ACCESSIBILITY: string;
		GDMSESSION: string;
		LESSCLOSE: string;
		NIX_SSL_CERT_FILE: string;
		LC_MEASUREMENT: string;
		GPG_AGENT_INFO: string;
		LC_IDENTIFICATION: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		XDG_VTNR: string;
		PWD: string;
		npm_execpath: string;
		NVM_CD_FLAGS: string;
		XDG_DATA_DIRS: string;
		LC_NUMERIC: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		MATE_DESKTOP_SESSION_ID: string;
		LC_PAPER: string;
		WAVETERM_SWAPTOKEN: string;
		QT_FONT_DPI: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
