import { Component,OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
 usuarios: any[] = [];
  usuarioForm: FormGroup;

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(data => this.usuarios = data);
  }

  submitUsuario(): void {
    if (this.usuarioForm.valid) {
      this.usuarioService.addUsuario(this.usuarioForm.value).subscribe(() => {
        this.usuarioForm.reset();
        this.loadUsuarios();
      });
    }
  }
}
