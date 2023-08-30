import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShopingService } from 'src/app/Shared/shoping.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedFile: File | null = null;
  docxData: any[] = [];

  constructor( private cartServise : ShopingService) { }

  ngOnInit(): void {
  } 
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    console.log('Selected file:', this.selectedFile);
  }
  onSubmit() {
    if (this.selectedFile) {
      console.log('Starting file upload...');
      const reader = new FileReader();

      reader.onload = (event: any) => {
        const base64File = event.target.result;
        this.cartServise.uploadFile(base64File).subscribe(
          (response) => {
            console.log('File uploaded successfully:', response);
          },
          (error) => {
            console.error('Error uploading file:', error);
          }
        );
      };

      reader.readAsDataURL(this.selectedFile);
    }
  }

  getFiles(){
    this.cartServise.getFiles().subscribe((e)=>{
      this.docxData = e
    })
  }

}
  
