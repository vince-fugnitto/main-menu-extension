import { injectable, inject } from "inversify";
import {
    CommandContribution, CommandRegistry, MAIN_MENU_BAR,
    MenuContribution, MenuModelRegistry, MessageService
} from "@theia/core/lib/common";

export const MenuExampleCommand = {
    id: 'MenuExample.command',
    label: "Say Hello"
};

@injectable()
export class MenuExampleCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(MenuExampleCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class MenuExampleMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        const subMenuPath = [...MAIN_MENU_BAR, 'hello-world'];
        menus.registerSubmenu(subMenuPath, 'Hello World', {
            order: '2'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: MenuExampleCommand.id,
            label: MenuExampleCommand.label
        });
    }
}
