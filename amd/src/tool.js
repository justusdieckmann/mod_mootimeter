// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

import Templates from 'core/templates';

/**
 * Super class for tools.
 *
 * @module     mod_mootimeter/tool
 * @copyright  2023 Justus Dieckmann WWU
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
export default class SuperTool {

    /** @type {Page} */
    page;
    /** @type {boolean} */
    isEditing;

    constructor(page, isEditing) {
        this.page = page;
        this.isEditing = isEditing;
    }

    /**
     * Renders a page.
     *
     * @return {Promise<HTMLElement>}
     */
    // eslint-disable-next-line no-unused-vars
    async render() {
        throw new Error("Missing Implementation");
    }

    /**
     * Renders the result page.
     *
     * @return {Promise<HTMLElement>}
     */
    // eslint-disable-next-line no-unused-vars
    async renderResult() {
        throw new Error("Missing Implementation");
    }

    /**
     * Render a template to an Element.
     * @param {string} template
     * @param {Object} context
     * @returns {Promise<HTMLElement>}
     */
    async renderTemplate(template, context) {
        const {html} = await Templates.renderForPromise(template, context);
        const templateEl = document.createElement('div');
        templateEl.innerHTML = html;
        return templateEl;
    }

}
