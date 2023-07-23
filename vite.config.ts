import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import * as fs from 'fs'

const basePath = path.resolve(__dirname, './src');
const srcDirs = fs
	.readdirSync(basePath)
	.filter((name) => fs.lstatSync(path.join(basePath, name)).isDirectory());

const srcAliases = srcDirs.reduce(
	(acc: any, name: any) => ({
		...acc,
		[`~${name}`]: `${path.resolve(__dirname, 'src')}/${name}`,
	}),
	{}
);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
  	server: {
		port: 3000,
		open: true,
		host: true
	},
	resolve: {
		alias: srcAliases
	}
})
