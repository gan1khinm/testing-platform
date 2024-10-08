import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { OrganizationService } from "../services/OrganizationService";
import { Organization } from "../entities/Organization";
import { CreateOrganizationDTO } from "../dto/CreateOrganizationDTO";
import { UpdateOrganizationDTO } from "../dto/UpdateOrganizationDTO";

@Controller("organization")
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) {
    }

    @Get("receive/:name")
    async receive(@Param("name") name: string): Promise<Organization> {
        return await this.organizationService.receiveByName(name);
    }

    @Post("create")
    async create(@Body() createOrganizationDTO: CreateOrganizationDTO): Promise<number> {
        return await this.organizationService.create(createOrganizationDTO);
    }

    @Put("update/:id")
    async update(@Param("id") id: number, @Body() updateOrganizationDTO: UpdateOrganizationDTO): Promise<Organization> {
        return await this.organizationService.update(id, updateOrganizationDTO);
    }

    // @Post("add_student")
    // async addStudent(@Body() addStudentDto: AddStudentDTO): Promise<boolean> {
    //     return await this.organizationService.addStudent(addStudentDto);
    // }

    // @Post("add_teacher")
    // async addTeacher(@Body() addTeacherDTO: AddTeacherDTO): Promise<boolean> {
    //     return await this.organizationService.addTeacher(addTeacherDTO);
    // }

    // @Post("add_topic")
    // async addTopic(@Body() addTopicDTO: AddTopicDTO): Promise<boolean> {
    //     return await this.organizationService.addTopic(addTopicDTO);
    // }
}
