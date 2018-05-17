
import { NativeModules } from 'react-native';
const { FilePickerManager } = NativeModules;


type PickerOptions = {
  title?: string;
  type?: string;
}

type PickerResponse =
  | { cancelled: true; }
  | { uri: string; path?: string; }

export default class FilePicker {
  static pickFile(options?: PickerOptions = {}): Promise<PickerResponse> {
    return FilePickerManager.pickFile(options);
  }
}
