import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Layouts from 'vite-plugin-vue-layouts';
import { VitePWA } from 'vite-plugin-pwa';
import generateSitemap from 'vite-ssg-sitemap';
import VueRouter from 'unplugin-vue-router/vite';
import { VueRouterExports } from 'unplugin-vue-router';
import { VitePluginFonts } from 'vite-plugin-fonts'
import ViteRadar from 'vite-plugin-radar'
export default defineConfig({
	base: '/',
	define: {
		'process.env': {}
	},
	plugins: [
		vue(),
		VueRouter({
			dts: true,
			routesFolder: 'src/pages',
		}),
		ViteRadar({
			analytics: {
				id: 'X',
			},
		}),
		Components({
			dts: true,
			resolvers: [
				IconsResolver({
					prefix: 'icon',
				}),
			],
		}),
		VitePluginFonts({
			google: {
				families: ['Arvo', 'Roboto Regular'],
			},
		}),
		Icons({
			compiler: 'vue3',
		}),
		AutoImport({
			dts: true,
			include: [
				/\.[tj]sx?$/,
				/\.vue\??/,
			],
			imports: [
				'vue',
				{ '@vue-router': VueRouterExports },
				'vue-i18n',
				'@vueuse/core',
				'@vueuse/head',
			],
			resolvers: [],
		}),
		Layouts(),
		VitePWA({
			includeAssets: [
				'favicon-16x16.png',
				'favicon-32x32.png',
				'favicon.ico',
				'robots.txt',
				'apple-touch-icon.png',
			],
			manifest: {
				name: 'Vitailse Template',
				short_name: 'Vitailse Template',
				description: 'Vitailse Template',
			},
		}),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	server: {
		fs: {
			strict: true,
		},
	},
	optimizeDeps: {
		include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
	},
	// @ts-ignore
	ssgOptions: {
		script: 'async',
		formatting: 'minify',
		format: 'cjs',
		onFinished() {
			generateSitemap();
		},
		mock: true
	},
	test: {
		include: ['src/__test__/**/*.test.ts', 'src/__test__/**/*.spec.ts'],
		environment: 'jsdom',
		deps: {
			inline: ['@vue', '@vueuse', 'vue-demi'],
		},
	},
	ssr: {
		// TODO: workaround until they support native ESM
		noExternal: ['workbox-window', /vue-i18n/],
	},
});
