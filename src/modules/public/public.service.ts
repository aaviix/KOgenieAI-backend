import { Injectable } from '@nestjs/common';
import {
  CommonSettingsSlugs,
  CountryListObjectArray,
  LanguageListJsonArray,
} from 'src/shared/constants/array.constants';
import {
  addPhotoPrefix,
  getAdminSettingsData,
  processException,
  successResponse,
} from 'src/shared/helpers/functions';

@Injectable()
export class PublicService {
  async getAllLanguageList() {
    const languageList = LanguageListJsonArray;
    return successResponse('Language list', languageList);
  }

  async commonSettings() {
    try {
      const data = {};

      data['countryList'] = CountryListObjectArray;
      // site_logo;
      data['settings'] = await getAdminSettingsData(CommonSettingsSlugs);
      if (data['settings']?.site_logo) {
        data['settings'].site_logo = addPhotoPrefix(
          data['settings']?.site_logo,
        );
      }
      return successResponse('Common settings', data);
    } catch (error) {
      processException(error);
    }
  }
}
