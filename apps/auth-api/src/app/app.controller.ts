import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Param, Req, Res } from '@nestjs/common/decorators';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Res({ passthrough: true }) res: Response) {
    const accessToken = await this.authService.login(req.user);
    const secretData = {
      accessToken,
      refreshToken: 'tbc',
    };
    res.cookie('auth-cookie', secretData, {
      httpOnly: true,
      expires: new Date(new Date().getTime() + 86409000),
    });
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('articles')
  getArticles(@Request() req) {
    const test = [
      {
        id: 1,
        slug: 'how-to-do',
        title: 'How to do',
      },
      {
        id: 2,
        slug: 'best-practices',
        title: 'Best practices',
      },
    ];
    return test;
  }

  @Get('articles/:id')
  findOneArticle(@Param() params) {
    const test = [
      {
        id: 1,
        slug: 'how-to-do',
        title: 'How to do',
      },
      {
        id: 2,
        slug: 'best-practices',
        title: 'Best practices',
      },
    ];

    return test.find((item) => item.id == params.id);
  }
}
