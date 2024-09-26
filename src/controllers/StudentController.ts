import { Body, Controller, Get, Post } from "@nestjs/common";
import { StudentService } from "../services/StudentService";
import { CreateStudentDTO } from "../dto/CreateStudentDTO";

@Controller("student")
export class StudentController {
    constructor(private readonly studentService: StudentService) {
    }

    @Post("create")
    async create(@Body() createStudentDTO: CreateStudentDTO): Promise<number> {
        return await this.studentService.create(createStudentDTO);
    }

    @Get("receive/groups")
    async receiveAllGroups(): Promise<string[]> {
        return await this.studentService.receiveAllGroups();
    }
}
