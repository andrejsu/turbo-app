// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import { themeChange } from "theme-change"

themeChange()