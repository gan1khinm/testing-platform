import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "../services/AuthService";
import { ReturnUserDTO } from "../dto/ReturnUserDTO";
import { LoginDTO } from "../dto/LoginDTO";
import { RegisterDTO } from "../dto/RegisterDTO";
import { GetInviteLinkDTO } from "../dto/GetInviteLinkDTO";
import { ReturnCheckInviteLinkDTO } from "../dto/ReturnCheckInviteLinkDTO";
import {
    CheckRecoverLinkDTOs,
    RecoverPasswordDTO,
    UpdatePasswordAfterRecoverDTO,
    UpdatePasswordDTO
} from "../dto/RecoverPasswordDTO";
import { CheckInviteLinkDTO } from "../dto/CheckInviteLinkDTO";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post("login")
    async login(@Body() body: LoginDTO): Promise<ReturnUserDTO> {
        return await this.authService.login(body);
    }

    @Post("register")
    async register(@Body() body: RegisterDTO): Promise<ReturnUserDTO> {
        return await this.authService.register(body);
    }

    @Post("get_invite_link")
    async getInviteLink(@Body() body: GetInviteLinkDTO): Promise<string> {
        return await this.authService.getInviteLink(body);
    }

    @Post("check_invite_link")
    async checkInviteLink(@Body() body: CheckInviteLinkDTO): Promise<ReturnCheckInviteLinkDTO> {
        return await this.authService.checkInviteLink(body);
    }

    @Post("recover_password")
    async recoverPassword(@Body() body: RecoverPasswordDTO): Promise<boolean> {
        return await this.authService.recoverPassword(body);
    }

    @Post("check_recover_link")
    async checkRecoverLink(@Body() body: CheckRecoverLinkDTOs): Promise<boolean> {
        return await this.authService.checkRecoverLink(body);
    }

    @Post("update_password_after_recover")
    async updatePasswordAfterRecover(@Body() body: UpdatePasswordAfterRecoverDTO): Promise<boolean> {
        return await this.authService.updatePasswordAfterRecover(body);
    }

    @Post("update_password")
    async updatePassword(@Body() body: UpdatePasswordDTO): Promise<boolean> {
        return await this.authService.updatePassword(body);
    }
}
