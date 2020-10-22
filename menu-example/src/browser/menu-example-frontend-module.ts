/**
 * Generated using theia-extension-generator
 */
import { MenuExampleCommandContribution, MenuExampleMenuContribution } from './menu-example-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(MenuExampleCommandContribution);
    bind(MenuContribution).to(MenuExampleMenuContribution);
});
