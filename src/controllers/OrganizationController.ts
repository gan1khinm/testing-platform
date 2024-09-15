import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrganizationService } from '../services/OrganizationService';
import { AddStudentDTO } from '../dto/AddStudentDTO';

@Controller("organization")
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) {
    }

    @Get("create/:name")
    async create(@Param("name") name: string): Promise<number> {
        return await this.organizationService.create(name);
    }

    @Post("add_student")
    async addStudent(@Body() addStudentDto: AddStudentDTO): Promise<boolean> {
        return await this.organizationService.addStudent(addStudentDto);
    }
}
