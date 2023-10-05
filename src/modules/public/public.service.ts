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
import { TrustedOrganizationService } from '../admin/trusted-organization/trusted.service';
import { SettingService } from '../admin/settings/settings.service';

@Injectable()
export class PublicService {
  constructor(
    private readonly trustedOrganizationService: TrustedOrganizationService,
    private readonly settingService: SettingService,
  ) {}
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

  async getLandingPageData() {
    try {
      const data = {};
      const trustedOrganizations =
        await this.trustedOrganizationService.getAllTrustedOrganization();

      const landinPageData = await this.settingService.getLlandingPageData();

      data['landing_data'] = landinPageData.data;
      data['trusted_organizations'] = trustedOrganizations.data;
      return successResponse('Landing page data', data);
    } catch (error) {
      processException(error);
    }
  }
}
