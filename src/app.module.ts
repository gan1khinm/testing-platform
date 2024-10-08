import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { AppController } from "./controllers/app.controller";
import { AppService } from "./services/app.service";
import { Organization } from "./entities/Organization";
import { Teacher } from "./entities/Teacher";
import { Student } from "./entities/Student";
import { Topic } from "./entities/Topic";
import { Question } from "./entities/Question";
import { Answer } from "./entities/Answer";
import { TestAttempt } from "./entities/TestAttempt";
import { AttemptDetail } from "./entities/AttemptDetail";
import { AuthService } from "./services/AuthService";
import { AuthController } from "./controllers/AuthController";
import { User } from "./entities/User";
import { OrganizationController } from "./controllers/OrganizationController";
import { OrganizationService } from "./services/OrganizationService";
import { StudentController } from "./controllers/StudentController";
import { StudentService } from "./services/StudentService";
import { TeacherController } from "./controllers/TeacherController";
import { TeacherService } from "./services/TeacherService";
import { TopicController } from "./controllers/TopicController";
import { TopicService } from "./services/TopicService";
import { AnswerService } from "./services/AnswerService";
import { QuestionService } from "./services/QuestionService";
import { AnswerController } from "./controllers/AnswerController";
import { QuestionController } from "./controllers/QuestionController";
import { Test } from "./entities/Test";
import { TestService } from "./services/TestService";
import { TestController } from "./controllers/TestController";
import { TestAttemptService } from "./services/TestAttemptService";
import { AttemptDetailService } from "./services/AttemptDetailService";
import { Recover } from "./entities/Recover";
import { RecoverService } from "./services/RecoverService";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Organization,
            Teacher,
            Student,
            Topic,
            Question,
            Answer,
            TestAttempt,
            AttemptDetail,
            User,
            Test,
            Recover
        ]),
        TypeOrmModule.forRoot({
            type: "postgres",
            ssl: true,
            host: process.env.DB_HOST,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            synchronize: true,
            logging: false,
            entities: [
                Organization,
                Teacher,
                Student,
                Topic,
                Question,
                Answer,
                TestAttempt,
                AttemptDetail,
                User,
                Test,
                Recover
            ]
        })
    ],
    controllers: [
        AppController,
        AuthController,
        OrganizationController,
        StudentController,
        TeacherController,
        TopicController,
        QuestionController,
        AnswerController,
        TestController
    ],
    providers: [
        AppService,
        AuthService,
        OrganizationService,
        StudentService,
        TeacherService,
        TopicService,
        QuestionService,
        AnswerService,
        TestService,
        TestAttemptService,
        AttemptDetailService,
        RecoverService
    ],
    exports: [TypeOrmModule]
})
export class AppModule {
}
