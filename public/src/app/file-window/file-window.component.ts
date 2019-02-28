import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { SaveManager } from 'src/classes/save-manager';

@Component({
  selector: 'app-file-window',
  templateUrl: './file-window.component.html',
  styleUrls: ['./file-window.component.sass']
})
export class FileWindowComponent implements OnInit, OnChanges {
  @Input() mode: string;
  @Input() savedata: any;

  @Output() wavesdata = new EventEmitter<any>(); // when opening, this will return the waves data

  fieldValue: string; // The current value of the field for saving / loading
  saves: any[];

  currentSave = 0;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(change: any) {
    this.saves = SaveManager.retrieveAllSaves() || [];
    this.fieldValue = this.saves[0].name;
  }

  private save(saveName?: string, saveData?: any) {
    console.log(saveName, saveData);
    if (!saveName) {
      saveName = this.fieldValue;
    }
    if (!saveData) {
      saveData = this.savedata;
    }

    console.log(saveName, saveData);

    SaveManager.save(saveName, saveData);
    this.wavesdata.emit(SaveManager.retrieveSave(saveName));
    console.log('Save complete!');
  }

  private loadWavesFromSave(saveName?: string) {
    if (!saveName) {
      saveName = this.fieldValue;
    }
    console.log('Retrieved', SaveManager.retrieveSave(saveName));
    this.wavesdata.emit(SaveManager.retrieveSave(saveName));
  }

  setSave(idx) {
    this.currentSave = idx;
    console.log(this.saves[idx].name);
    this.fieldValue = this.saves[idx].name;
  }

  checkOverwrite() {
    return this.saves.findIndex(x => x.name === this.fieldValue) > -1;
  }
}
