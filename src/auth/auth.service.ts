import { ConflictException, Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signupDto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {
  }
  async signup(signupDto: SignupDto) {
    const { email, password, username } = signupDto;
    //Vérifier si l'utilisateur est déja inscrit
    const user = await this.prismaService.user.findUnique({ where: { email: email } })
    if (user)
      throw new ConflictException('Email already exists');
    // Hasher le mot de passe
    const hash = await bcrypt.hash(password, 10);
    // Enregistrer l’utilisateur dans la base de données
    await this.prismaService.user.create({
      data: {
        username: username,
        email: email,
        password: hash
      }
    })
    // Envoyer un email de confirmation
    // Retourner une réponse de succés
    return { data: 'User succesfully created' };
  }
}
