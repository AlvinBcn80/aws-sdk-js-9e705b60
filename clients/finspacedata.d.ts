import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Finspacedata extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Finspacedata.Types.ClientConfiguration)
  config: Config & Finspacedata.Types.ClientConfiguration;
  /**
   * Creates a new Changeset in a FinSpace Dataset.
   */
  createChangeset(params: Finspacedata.Types.CreateChangesetRequest, callback?: (err: AWSError, data: Finspacedata.Types.CreateChangesetResponse) => void): Request<Finspacedata.Types.CreateChangesetResponse, AWSError>;
  /**
   * Creates a new Changeset in a FinSpace Dataset.
   */
  createChangeset(callback?: (err: AWSError, data: Finspacedata.Types.CreateChangesetResponse) => void): Request<Finspacedata.Types.CreateChangesetResponse, AWSError>;
  /**
   * Creates a Dataview for a Dataset.
   */
  createDataView(params: Finspacedata.Types.CreateDataViewRequest, callback?: (err: AWSError, data: Finspacedata.Types.CreateDataViewResponse) => void): Request<Finspacedata.Types.CreateDataViewResponse, AWSError>;
  /**
   * Creates a Dataview for a Dataset.
   */
  createDataView(callback?: (err: AWSError, data: Finspacedata.Types.CreateDataViewResponse) => void): Request<Finspacedata.Types.CreateDataViewResponse, AWSError>;
  /**
   * Creates a new FinSpace Dataset.
   */
  createDataset(params: Finspacedata.Types.CreateDatasetRequest, callback?: (err: AWSError, data: Finspacedata.Types.CreateDatasetResponse) => void): Request<Finspacedata.Types.CreateDatasetResponse, AWSError>;
  /**
   * Creates a new FinSpace Dataset.
   */
  createDataset(callback?: (err: AWSError, data: Finspacedata.Types.CreateDatasetResponse) => void): Request<Finspacedata.Types.CreateDatasetResponse, AWSError>;
  /**
   * Deletes a FinSpace Dataset.
   */
  deleteDataset(params: Finspacedata.Types.DeleteDatasetRequest, callback?: (err: AWSError, data: Finspacedata.Types.DeleteDatasetResponse) => void): Request<Finspacedata.Types.DeleteDatasetResponse, AWSError>;
  /**
   * Deletes a FinSpace Dataset.
   */
  deleteDataset(callback?: (err: AWSError, data: Finspacedata.Types.DeleteDatasetResponse) => void): Request<Finspacedata.Types.DeleteDatasetResponse, AWSError>;
  /**
   * Get information about a Changeset.
   */
  getChangeset(params: Finspacedata.Types.GetChangesetRequest, callback?: (err: AWSError, data: Finspacedata.Types.GetChangesetResponse) => void): Request<Finspacedata.Types.GetChangesetResponse, AWSError>;
  /**
   * Get information about a Changeset.
   */
  getChangeset(callback?: (err: AWSError, data: Finspacedata.Types.GetChangesetResponse) => void): Request<Finspacedata.Types.GetChangesetResponse, AWSError>;
  /**
   * Gets information about a Dataview.
   */
  getDataView(params: Finspacedata.Types.GetDataViewRequest, callback?: (err: AWSError, data: Finspacedata.Types.GetDataViewResponse) => void): Request<Finspacedata.Types.GetDataViewResponse, AWSError>;
  /**
   * Gets information about a Dataview.
   */
  getDataView(callback?: (err: AWSError, data: Finspacedata.Types.GetDataViewResponse) => void): Request<Finspacedata.Types.GetDataViewResponse, AWSError>;
  /**
   * Returns information about a Dataset.
   */
  getDataset(params: Finspacedata.Types.GetDatasetRequest, callback?: (err: AWSError, data: Finspacedata.Types.GetDatasetResponse) => void): Request<Finspacedata.Types.GetDatasetResponse, AWSError>;
  /**
   * Returns information about a Dataset.
   */
  getDataset(callback?: (err: AWSError, data: Finspacedata.Types.GetDatasetResponse) => void): Request<Finspacedata.Types.GetDatasetResponse, AWSError>;
  /**
   * Request programmatic credentials to use with FinSpace SDK.
   */
  getProgrammaticAccessCredentials(params: Finspacedata.Types.GetProgrammaticAccessCredentialsRequest, callback?: (err: AWSError, data: Finspacedata.Types.GetProgrammaticAccessCredentialsResponse) => void): Request<Finspacedata.Types.GetProgrammaticAccessCredentialsResponse, AWSError>;
  /**
   * Request programmatic credentials to use with FinSpace SDK.
   */
  getProgrammaticAccessCredentials(callback?: (err: AWSError, data: Finspacedata.Types.GetProgrammaticAccessCredentialsResponse) => void): Request<Finspacedata.Types.GetProgrammaticAccessCredentialsResponse, AWSError>;
  /**
   * A temporary Amazon S3 location, where you can copy your files from a source location to stage or use as a scratch space in FinSpace notebook.
   */
  getWorkingLocation(params: Finspacedata.Types.GetWorkingLocationRequest, callback?: (err: AWSError, data: Finspacedata.Types.GetWorkingLocationResponse) => void): Request<Finspacedata.Types.GetWorkingLocationResponse, AWSError>;
  /**
   * A temporary Amazon S3 location, where you can copy your files from a source location to stage or use as a scratch space in FinSpace notebook.
   */
  getWorkingLocation(callback?: (err: AWSError, data: Finspacedata.Types.GetWorkingLocationResponse) => void): Request<Finspacedata.Types.GetWorkingLocationResponse, AWSError>;
  /**
   * Lists the FinSpace Changesets for a Dataset.
   */
  listChangesets(params: Finspacedata.Types.ListChangesetsRequest, callback?: (err: AWSError, data: Finspacedata.Types.ListChangesetsResponse) => void): Request<Finspacedata.Types.ListChangesetsResponse, AWSError>;
  /**
   * Lists the FinSpace Changesets for a Dataset.
   */
  listChangesets(callback?: (err: AWSError, data: Finspacedata.Types.ListChangesetsResponse) => void): Request<Finspacedata.Types.ListChangesetsResponse, AWSError>;
  /**
   * Lists all available Dataviews for a Dataset.
   */
  listDataViews(params: Finspacedata.Types.ListDataViewsRequest, callback?: (err: AWSError, data: Finspacedata.Types.ListDataViewsResponse) => void): Request<Finspacedata.Types.ListDataViewsResponse, AWSError>;
  /**
   * Lists all available Dataviews for a Dataset.
   */
  listDataViews(callback?: (err: AWSError, data: Finspacedata.Types.ListDataViewsResponse) => void): Request<Finspacedata.Types.ListDataViewsResponse, AWSError>;
  /**
   * Lists all of the active Datasets that a user has access to.
   */
  listDatasets(params: Finspacedata.Types.ListDatasetsRequest, callback?: (err: AWSError, data: Finspacedata.Types.ListDatasetsResponse) => void): Request<Finspacedata.Types.ListDatasetsResponse, AWSError>;
  /**
   * Lists all of the active Datasets that a user has access to.
   */
  listDatasets(callback?: (err: AWSError, data: Finspacedata.Types.ListDatasetsResponse) => void): Request<Finspacedata.Types.ListDatasetsResponse, AWSError>;
  /**
   * Updates a FinSpace Changeset.
   */
  updateChangeset(params: Finspacedata.Types.UpdateChangesetRequest, callback?: (err: AWSError, data: Finspacedata.Types.UpdateChangesetResponse) => void): Request<Finspacedata.Types.UpdateChangesetResponse, AWSError>;
  /**
   * Updates a FinSpace Changeset.
   */
  updateChangeset(callback?: (err: AWSError, data: Finspacedata.Types.UpdateChangesetResponse) => void): Request<Finspacedata.Types.UpdateChangesetResponse, AWSError>;
  /**
   * Updates a FinSpace Dataset.
   */
  updateDataset(params: Finspacedata.Types.UpdateDatasetRequest, callback?: (err: AWSError, data: Finspacedata.Types.UpdateDatasetResponse) => void): Request<Finspacedata.Types.UpdateDatasetResponse, AWSError>;
  /**
   * Updates a FinSpace Dataset.
   */
  updateDataset(callback?: (err: AWSError, data: Finspacedata.Types.UpdateDatasetResponse) => void): Request<Finspacedata.Types.UpdateDatasetResponse, AWSError>;
}
declare namespace Finspacedata {
  export type AliasString = string;
  export type Boolean = boolean;
  export type ChangeType = "REPLACE"|"APPEND"|"MODIFY"|string;
  export type ChangesetArn = string;
  export interface ChangesetErrorInfo {
    /**
     * The text of the error message.
     */
    errorMessage?: ErrorMessage;
    /**
     * The category of the error.    VALIDATION -The inputs to this request are invalid.    SERVICE_QUOTA_EXCEEDED - Service quotas have been exceeded. Please contact AWS support to increase quotas.    ACCESS_DENIED - Missing required permission to perform this request.    RESOURCE_NOT_FOUND - One or more inputs to this request were not found.    THROTTLING - The system temporarily lacks sufficient resources to process the request.    INTERNAL_SERVICE_EXCEPTION - An internal service error has occurred.    CANCELLED - Cancelled.    USER_RECOVERABLE - A user recoverable error has occurred.  
     */
    errorCategory?: ErrorCategory;
  }
  export type ChangesetId = string;
  export type ChangesetList = ChangesetSummary[];
  export interface ChangesetSummary {
    /**
     * The unique identifier for a Changeset.
     */
    changesetId?: ChangesetId;
    /**
     * The ARN identifier of the Changeset.
     */
    changesetArn?: ChangesetArn;
    /**
     * The unique identifier for the FinSpace Dataset in which the Changeset is created.
     */
    datasetId?: DatasetId;
    /**
     * Type that indicates how a Changeset is applied to a Dataset.    REPLACE - Changeset is considered as a replacement to all prior loaded Changesets.    APPEND - Changeset is considered as an addition to the end of all prior loaded Changesets.    MODIFY - Changeset is considered as a replacement to a specific prior ingested Changeset.  
     */
    changeType?: ChangeType;
    /**
     * Options that define the location of the data being ingested.
     */
    sourceParams?: SourceParams;
    /**
     * Options that define the structure of the source file(s).
     */
    formatParams?: FormatParams;
    /**
     * The timestamp at which the Changeset was created in FinSpace. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createTime?: TimestampEpoch;
    /**
     * Status of the Changeset ingestion.    PENDING - Changeset is pending creation.    FAILED - Changeset creation has failed.    SUCCESS - Changeset creation has succeeded.    RUNNING - Changeset creation is running.    STOP_REQUESTED - User requested Changeset creation to stop.  
     */
    status?: IngestionStatus;
    /**
     * The structure with error messages.
     */
    errorInfo?: ChangesetErrorInfo;
    /**
     * Time until which the Changeset is active. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    activeUntilTimestamp?: TimestampEpoch;
    activeFromTimestamp?: TimestampEpoch;
    /**
     * The unique identifier of the Changeset that is updated.
     */
    updatesChangesetId?: ChangesetId;
    /**
     * The unique identifier of the updated Changeset.
     */
    updatedByChangesetId?: ChangesetId;
  }
  export type ClientToken = string;
  export type ColumnDataType = "STRING"|"CHAR"|"INTEGER"|"TINYINT"|"SMALLINT"|"BIGINT"|"FLOAT"|"DOUBLE"|"DATE"|"DATETIME"|"BOOLEAN"|"BINARY"|string;
  export interface ColumnDefinition {
    /**
     * Data type of a column.    STRING - A String data type.  CHAR - A char data type.  INTEGER - An integer data type.  TINYINT - A tinyint data type.  SMALLINT - A smallint data type.  BIGINT - A bigint data type.  FLOAT - A float data type.  DOUBLE - A double data type.  DATE - A date data type.  DATETIME - A datetime data type.  BOOLEAN - A boolean data type.  BINARY - A binary data type.  
     */
    dataType?: ColumnDataType;
    /**
     * Name for a column.
     */
    columnName?: ColumnName;
    /**
     * Description for a column.
     */
    columnDescription?: ColumnDescription;
  }
  export type ColumnDescription = string;
  export type ColumnList = ColumnDefinition[];
  export type ColumnName = string;
  export type ColumnNameList = ColumnName[];
  export interface CreateChangesetRequest {
    /**
     * A token used to ensure idempotency.
     */
    clientToken?: ClientToken;
    /**
     * The unique identifier for the FinSpace Dataset where the Changeset will be created. 
     */
    datasetId: DatasetId;
    /**
     * Option to indicate how a Changeset will be applied to a Dataset.    REPLACE - Changeset will be considered as a replacement to all prior loaded Changesets.    APPEND - Changeset will be considered as an addition to the end of all prior loaded Changesets.    MODIFY - Changeset is considered as a replacement to a specific prior ingested Changeset.  
     */
    changeType: ChangeType;
    /**
     * Options that define the location of the data being ingested.
     */
    sourceParams: SourceParams;
    /**
     * Options that define the structure of the source file(s) including the format type (formatType), header row (withHeader), data separation character (separator) and the type of compression (compression).   formatType is a required attribute and can have the following values:     PARQUET - Parquet source file format.    CSV - CSV source file format.    JSON - JSON source file format.    XML - XML source file format.    For example, you could specify the following for formatParams:  "formatParams": { "formatType": "CSV", "withHeader": "true", "separator": ",", "compression":"None" }  
     */
    formatParams: FormatParams;
  }
  export interface CreateChangesetResponse {
    /**
     * The unique identifier for the FinSpace Dataset where the Changeset is created.
     */
    datasetId?: DatasetId;
    /**
     * The unique identifier of the Changeset that is created.
     */
    changesetId?: ChangesetId;
  }
  export interface CreateDataViewRequest {
    /**
     * A token used to ensure idempotency.
     */
    clientToken?: ClientToken;
    /**
     * The unique Dataset identifier that is used to create a Dataview.
     */
    datasetId: DatasetId;
    /**
     * Flag to indicate Dataview should be updated automatically.
     */
    autoUpdate?: Boolean;
    /**
     * Columns to be used for sorting the data.
     */
    sortColumns?: SortColumnList;
    /**
     * Ordered set of column names used to partition data.
     */
    partitionColumns?: PartitionColumnList;
    /**
     * Beginning time to use for the Dataview. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    asOfTimestamp?: TimestampEpoch;
    /**
     * Options that define the destination type for the Dataview.
     */
    destinationTypeParams: DataViewDestinationTypeParams;
  }
  export interface CreateDataViewResponse {
    /**
     * The unique identifier of the Dataset used for the Dataview.
     */
    datasetId?: DatasetId;
    /**
     * The unique identifier for the created Dataview.
     */
    dataViewId?: DataViewId;
  }
  export interface CreateDatasetRequest {
    /**
     * A token used to ensure idempotency.
     */
    clientToken?: ClientToken;
    /**
     * Display title for a FinSpace Dataset.
     */
    datasetTitle: DatasetTitle;
    /**
     * The format in which Dataset data is structured.    TABULAR - Data is structured in a tabular format.    NON_TABULAR - Data is structured in a non-tabular format.  
     */
    kind: DatasetKind;
    /**
     * Description of a Dataset.
     */
    datasetDescription?: DatasetDescription;
    /**
     * Contact information for a Dataset owner.
     */
    ownerInfo?: DatasetOwnerInfo;
    /**
     * Permission group parameters for Dataset permissions.
     */
    permissionGroupParams: PermissionGroupParams;
    /**
     * The unique resource identifier for a Dataset.
     */
    alias?: AliasString;
    /**
     * Definition for a schema on a tabular Dataset.
     */
    schemaDefinition?: SchemaUnion;
  }
  export interface CreateDatasetResponse {
    /**
     * The unique identifier for the created Dataset.
     */
    datasetId?: DatasetId;
  }
  export interface Credentials {
    /**
     * The access key identifier.
     */
    accessKeyId?: stringValueLength1to255;
    /**
     * The access key.
     */
    secretAccessKey?: stringValueMaxLength1000;
    /**
     * The session token.
     */
    sessionToken?: stringValueMaxLength1000;
  }
  export type DataViewArn = string;
  export type DataViewDestinationType = string;
  export interface DataViewDestinationTypeParams {
    /**
     * Destination type for a Dataview.    GLUE_TABLE - Glue table destination type.  
     */
    destinationType: DataViewDestinationType;
    s3DestinationExportFileFormat?: ExportFileFormat;
    s3DestinationExportFileFormatOptions?: S3DestinationFormatOptions;
  }
  export interface DataViewErrorInfo {
    /**
     * The text of the error message.
     */
    errorMessage?: ErrorMessage;
    /**
     * The category of the error.    VALIDATION -The inputs to this request are invalid.    SERVICE_QUOTA_EXCEEDED - Service quotas have been exceeded. Please contact AWS support to increase quotas.    ACCESS_DENIED - Missing required permission to perform this request.    RESOURCE_NOT_FOUND - One or more inputs to this request were not found.    THROTTLING - The system temporarily lacks sufficient resources to process the request.    INTERNAL_SERVICE_EXCEPTION - An internal service error has occurred.    CANCELLED - Cancelled.    USER_RECOVERABLE - A user recoverable error has occurred.  
     */
    errorCategory?: ErrorCategory;
  }
  export type DataViewId = string;
  export type DataViewList = DataViewSummary[];
  export type DataViewStatus = "RUNNING"|"STARTING"|"FAILED"|"CANCELLED"|"TIMEOUT"|"SUCCESS"|"PENDING"|"FAILED_CLEANUP_FAILED"|string;
  export interface DataViewSummary {
    /**
     * The unique identifier for the Dataview.
     */
    dataViewId?: DataViewId;
    /**
     * The ARN identifier of the Dataview.
     */
    dataViewArn?: DataViewArn;
    /**
     * Th unique identifier for the Dataview Dataset.
     */
    datasetId?: DatasetId;
    /**
     * Time range to use for the Dataview. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    asOfTimestamp?: TimestampEpoch;
    /**
     * Ordered set of column names used to partition data.
     */
    partitionColumns?: PartitionColumnList;
    /**
     * Columns to be used for sorting the data.
     */
    sortColumns?: SortColumnList;
    /**
     * The status of a Dataview creation.    RUNNING - Dataview creation is running.    STARTING - Dataview creation is starting.    FAILED - Dataview creation has failed.    CANCELLED - Dataview creation has been cancelled.    TIMEOUT - Dataview creation has timed out.    SUCCESS - Dataview creation has succeeded.    PENDING - Dataview creation is pending.    FAILED_CLEANUP_FAILED - Dataview creation failed and resource cleanup failed.  
     */
    status?: DataViewStatus;
    /**
     * The structure with error messages.
     */
    errorInfo?: DataViewErrorInfo;
    /**
     * Information about the Dataview destination.
     */
    destinationTypeProperties?: DataViewDestinationTypeParams;
    /**
     * The flag to indicate Dataview should be updated automatically.
     */
    autoUpdate?: Boolean;
    /**
     * The timestamp at which the Dataview was created in FinSpace. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createTime?: TimestampEpoch;
    /**
     * The last time that a Dataview was modified. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTime?: TimestampEpoch;
  }
  export interface Dataset {
    /**
     * An identifier for a Dataset.
     */
    datasetId?: DatasetId;
    /**
     * The ARN identifier of the Dataset.
     */
    datasetArn?: DatasetArn;
    /**
     * Display title for a Dataset.
     */
    datasetTitle?: DatasetTitle;
    /**
     * The format in which Dataset data is structured.    TABULAR - Data is structured in a tabular format.    NON_TABULAR - Data is structured in a non-tabular format.  
     */
    kind?: DatasetKind;
    /**
     * Description for a Dataset.
     */
    datasetDescription?: DatasetDescription;
    /**
     * Contact information for a Dataset owner.
     */
    ownerInfo?: DatasetOwnerInfo;
    /**
     * The timestamp at which the Dataset was created in FinSpace. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createTime?: TimestampEpoch;
    /**
     * The last time that the Dataset was modified. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTime?: TimestampEpoch;
    /**
     * Definition for a schema on a tabular Dataset.
     */
    schemaDefinition?: SchemaUnion;
    /**
     * The unique resource identifier for a Dataset.
     */
    alias?: AliasString;
  }
  export type DatasetArn = string;
  export type DatasetDescription = string;
  export type DatasetId = string;
  export type DatasetKind = "TABULAR"|"NON_TABULAR"|string;
  export type DatasetList = Dataset[];
  export interface DatasetOwnerInfo {
    /**
     * Name of the Dataset owner.
     */
    name?: OwnerName;
    /**
     * Phone number for the Dataset owner.
     */
    phoneNumber?: PhoneNumber;
    /**
     * Email address for the Dataset owner.
     */
    email?: Email;
  }
  export type DatasetStatus = "PENDING"|"FAILED"|"SUCCESS"|"RUNNING"|string;
  export type DatasetTitle = string;
  export interface DeleteDatasetRequest {
    /**
     * A token used to ensure idempotency.
     */
    clientToken?: ClientToken;
    /**
     * The unique identifier of the Dataset to be deleted.
     */
    datasetId: DatasetId;
  }
  export interface DeleteDatasetResponse {
    /**
     * The unique identifier for the deleted Dataset.
     */
    datasetId?: DatasetId;
  }
  export type Email = string;
  export type ErrorCategory = "VALIDATION"|"SERVICE_QUOTA_EXCEEDED"|"ACCESS_DENIED"|"RESOURCE_NOT_FOUND"|"THROTTLING"|"INTERNAL_SERVICE_EXCEPTION"|"CANCELLED"|"USER_RECOVERABLE"|string;
  export type ErrorMessage = string;
  export type ExportFileFormat = "PARQUET"|"DELIMITED_TEXT"|string;
  export type FormatParams = {[key: string]: StringMapValue};
  export interface GetChangesetRequest {
    /**
     * The unique identifier for the FinSpace Dataset where the Changeset is created.
     */
    datasetId: DatasetId;
    /**
     * The unique identifier of the Changeset for which to get data.
     */
    changesetId: ChangesetId;
  }
  export interface GetChangesetResponse {
    /**
     * The unique identifier for a Changeset.
     */
    changesetId?: ChangesetId;
    /**
     * The ARN identifier of the Changeset.
     */
    changesetArn?: ChangesetArn;
    /**
     * The unique identifier for the FinSpace Dataset where the Changeset is created.
     */
    datasetId?: DatasetId;
    /**
     * Type that indicates how a Changeset is applied to a Dataset.    REPLACE - Changeset is considered as a replacement to all prior loaded Changesets.    APPEND - Changeset is considered as an addition to the end of all prior loaded Changesets.    MODIFY - Changeset is considered as a replacement to a specific prior ingested Changeset.  
     */
    changeType?: ChangeType;
    /**
     * Options that define the location of the data being ingested.
     */
    sourceParams?: SourceParams;
    /**
     * Structure of the source file(s).
     */
    formatParams?: FormatParams;
    /**
     * The timestamp at which the Changeset was created in FinSpace. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createTime?: TimestampEpoch;
    /**
     * The status of Changeset creation operation.
     */
    status?: IngestionStatus;
    /**
     * The structure with error messages.
     */
    errorInfo?: ChangesetErrorInfo;
    /**
     * Time until which the Changeset is active. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    activeUntilTimestamp?: TimestampEpoch;
    activeFromTimestamp?: TimestampEpoch;
    /**
     * The unique identifier of the Changeset that is being updated.
     */
    updatesChangesetId?: ChangesetId;
    /**
     * The unique identifier of the updated Changeset.
     */
    updatedByChangesetId?: ChangesetId;
  }
  export interface GetDataViewRequest {
    /**
     * The unique identifier for the Dataview.
     */
    dataViewId: DataViewId;
    /**
     * The unique identifier for the Dataset used in the Dataview.
     */
    datasetId: DatasetId;
  }
  export interface GetDataViewResponse {
    /**
     * Flag to indicate Dataview should be updated automatically.
     */
    autoUpdate?: Boolean;
    /**
     * Ordered set of column names used to partition data.
     */
    partitionColumns?: PartitionColumnList;
    /**
     * The unique identifier for the Dataset used in the Dataview.
     */
    datasetId?: DatasetId;
    /**
     * Time range to use for the Dataview. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    asOfTimestamp?: TimestampEpoch;
    /**
     * Information about an error that occurred for the Dataview.
     */
    errorInfo?: DataViewErrorInfo;
    /**
     * The last time that a Dataview was modified. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTime?: TimestampEpoch;
    /**
     * The timestamp at which the Dataview was created in FinSpace. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createTime?: TimestampEpoch;
    /**
     * Columns to be used for sorting the data.
     */
    sortColumns?: SortColumnList;
    /**
     * The unique identifier for the Dataview.
     */
    dataViewId?: DataViewId;
    /**
     * The ARN identifier of the Dataview.
     */
    dataViewArn?: DataViewArn;
    /**
     * Options that define the destination type for the Dataview.
     */
    destinationTypeParams?: DataViewDestinationTypeParams;
    /**
     * The status of a Dataview creation.    RUNNING - Dataview creation is running.    STARTING - Dataview creation is starting.    FAILED - Dataview creation has failed.    CANCELLED - Dataview creation has been cancelled.    TIMEOUT - Dataview creation has timed out.    SUCCESS - Dataview creation has succeeded.    PENDING - Dataview creation is pending.    FAILED_CLEANUP_FAILED - Dataview creation failed and resource cleanup failed.  
     */
    status?: DataViewStatus;
  }
  export interface GetDatasetRequest {
    /**
     * The unique identifier for a Dataset.
     */
    datasetId: StringValueLength1to255;
  }
  export interface GetDatasetResponse {
    /**
     * The unique identifier for a Dataset.
     */
    datasetId?: DatasetId;
    /**
     * The ARN identifier of the Dataset.
     */
    datasetArn?: DatasetArn;
    /**
     * Display title for a Dataset.
     */
    datasetTitle?: DatasetTitle;
    /**
     * The format in which Dataset data is structured.    TABULAR - Data is structured in a tabular format.    NON_TABULAR - Data is structured in a non-tabular format.  
     */
    kind?: DatasetKind;
    /**
     * A description of the Dataset.
     */
    datasetDescription?: DatasetDescription;
    /**
     * The timestamp at which the Dataset was created in FinSpace. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    createTime?: TimestampEpoch;
    /**
     * The last time that the Dataset was modified. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
     */
    lastModifiedTime?: TimestampEpoch;
    /**
     * Definition for a schema on a tabular Dataset.
     */
    schemaDefinition?: SchemaUnion;
    /**
     * The unique resource identifier for a Dataset.
     */
    alias?: AliasString;
    /**
     * Status of the Dataset creation.    PENDING - Dataset is pending creation.    FAILED - Dataset creation has failed.    SUCCESS - Dataset creation has succeeded.    RUNNING - Dataset creation is running.  
     */
    status?: DatasetStatus;
  }
  export interface GetProgrammaticAccessCredentialsRequest {
    /**
     * The time duration in which the credentials remain valid. 
     */
    durationInMinutes?: SessionDuration;
    /**
     * The FinSpace environment identifier.
     */
    environmentId: IdType;
  }
  export interface GetProgrammaticAccessCredentialsResponse {
    /**
     * Returns the programmatic credentials.
     */
    credentials?: Credentials;
    /**
     * Returns the duration in which the credentials will remain valid.
     */
    durationInMinutes?: SessionDuration;
  }
  export interface GetWorkingLocationRequest {
    /**
     * Specify the type of the working location.    SAGEMAKER - Use the Amazon S3 location as a temporary location to store data content when working with FinSpace Notebooks that run on SageMaker studio.    INGESTION - Use the Amazon S3 location as a staging location to copy your data content and then use the location with the Changeset creation operation.  
     */
    locationType?: locationType;
  }
  export interface GetWorkingLocationResponse {
    /**
     * Returns the Amazon S3 URI for the working location.
     */
    s3Uri?: stringValueLength1to1024;
    /**
     * Returns the Amazon S3 Path for the working location.
     */
    s3Path?: stringValueLength1to1024;
    /**
     * Returns the Amazon S3 bucket name for the working location.
     */
    s3Bucket?: stringValueLength1to63;
  }
  export type IdType = string;
  export type IngestionStatus = "PENDING"|"FAILED"|"SUCCESS"|"RUNNING"|"STOP_REQUESTED"|string;
  export interface ListChangesetsRequest {
    /**
     * The unique identifier for the FinSpace Dataset to which the Changeset belongs.
     */
    datasetId: DatasetId;
    /**
     * The maximum number of results per page.
     */
    maxResults?: ResultLimit;
    /**
     * A token indicating where a results page should begin.
     */
    nextToken?: PaginationToken;
  }
  export interface ListChangesetsResponse {
    /**
     * List of Changesets found.
     */
    changesets?: ChangesetList;
    /**
     * A token indicating where a results page should begin.
     */
    nextToken?: PaginationToken;
  }
  export interface ListDataViewsRequest {
    /**
     * The unique identifier of the Dataset for which to retrieve Dataviews.
     */
    datasetId: DatasetId;
    /**
     * A token indicating where a results page should begin.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results per page.
     */
    maxResults?: ResultLimit;
  }
  export interface ListDataViewsResponse {
    /**
     * A token indicating where a results page should begin.
     */
    nextToken?: PaginationToken;
    /**
     * A list of Dataviews.
     */
    dataViews?: DataViewList;
  }
  export interface ListDatasetsRequest {
    /**
     * A token indicating where a results page should begin.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results per page.
     */
    maxResults?: ResultLimit;
  }
  export interface ListDatasetsResponse {
    /**
     * List of Datasets.
     */
    datasets?: DatasetList;
    /**
     * A token indicating where a results page should begin.
     */
    nextToken?: PaginationToken;
  }
  export type OwnerName = string;
  export type PaginationToken = string;
  export type PartitionColumnList = StringValueLength1to255[];
  export type PermissionGroupId = string;
  export interface PermissionGroupParams {
    /**
     * The unique identifier of the PermissionGroup.
     */
    permissionGroupId?: PermissionGroupId;
    /**
     * List of resource permissions.
     */
    datasetPermissions?: ResourcePermissionsList;
  }
  export type PhoneNumber = string;
  export interface ResourcePermission {
    /**
     * Permission for a resource.
     */
    permission?: StringValueLength1to250;
  }
  export type ResourcePermissionsList = ResourcePermission[];
  export type ResultLimit = number;
  export type S3DestinationFormatOptions = {[key: string]: StringMapValue};
  export interface SchemaDefinition {
    /**
     * List of column definitions.
     */
    columns?: ColumnList;
    /**
     * List of column names used for primary key.
     */
    primaryKeyColumns?: ColumnNameList;
  }
  export interface SchemaUnion {
    /**
     * The configuration for a schema on a tabular Dataset.
     */
    tabularSchemaConfig?: SchemaDefinition;
  }
  export type SessionDuration = number;
  export type SortColumnList = StringValueLength1to255[];
  export type SourceParams = {[key: string]: StringMapValue};
  export type StringMapKey = string;
  export type StringMapValue = string;
  export type StringValueLength1to250 = string;
  export type StringValueLength1to255 = string;
  export type TimestampEpoch = number;
  export interface UpdateChangesetRequest {
    /**
     * A token used to ensure idempotency.
     */
    clientToken?: ClientToken;
    /**
     * The unique identifier for the FinSpace Dataset in which the Changeset is created.
     */
    datasetId: DatasetId;
    /**
     * The unique identifier for the Changeset to update.
     */
    changesetId: ChangesetId;
    /**
     * Options that define the location of the data being ingested.
     */
    sourceParams: SourceParams;
    /**
     * Options that define the structure of the source file(s).
     */
    formatParams: FormatParams;
  }
  export interface UpdateChangesetResponse {
    /**
     * The unique identifier for the Changeset to update.
     */
    changesetId?: ChangesetId;
    /**
     * The unique identifier for the FinSpace Dataset in which the Changeset is created.
     */
    datasetId?: DatasetId;
  }
  export interface UpdateDatasetRequest {
    /**
     * A token used to ensure idempotency.
     */
    clientToken?: ClientToken;
    /**
     * The unique identifier for the Dataset to update.
     */
    datasetId: DatasetId;
    /**
     * A display title for the Dataset.
     */
    datasetTitle: DatasetTitle;
    /**
     * The format in which the Dataset data is structured.    TABULAR - Data is structured in a tabular format.    NON_TABULAR - Data is structured in a non-tabular format.  
     */
    kind: DatasetKind;
    /**
     * A description for the Dataset.
     */
    datasetDescription?: DatasetDescription;
    /**
     * The unique resource identifier for a Dataset.
     */
    alias?: AliasString;
    /**
     * Definition for a schema on a tabular Dataset.
     */
    schemaDefinition?: SchemaUnion;
  }
  export interface UpdateDatasetResponse {
    /**
     * The unique identifier for updated Dataset.
     */
    datasetId?: DatasetId;
  }
  export type locationType = "INGESTION"|"SAGEMAKER"|string;
  export type stringValueLength1to1024 = string;
  export type stringValueLength1to255 = string;
  export type stringValueLength1to63 = string;
  export type stringValueMaxLength1000 = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-07-13"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Finspacedata client.
   */
  export import Types = Finspacedata;
}
export = Finspacedata;
