/* tslint:disable */
/* eslint-disable */
/**
 * Saas Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface V1CheckSubjectsPermissionRequest
 */
export interface V1CheckSubjectsPermissionRequest {
  /**
   *
   * @type {string}
   * @memberof V1CheckSubjectsPermissionRequest
   */
  namespace: string;
  /**
   *
   * @type {string}
   * @memberof V1CheckSubjectsPermissionRequest
   */
  resource: string;
  /**
   *
   * @type {string}
   * @memberof V1CheckSubjectsPermissionRequest
   */
  action: string;
  /**
   *
   * @type {Array<string>}
   * @memberof V1CheckSubjectsPermissionRequest
   */
  subjects?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof V1CheckSubjectsPermissionRequest
   */
  tenantId?: string;
}