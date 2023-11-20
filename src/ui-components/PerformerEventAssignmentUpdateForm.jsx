/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SelectField } from "@aws-amplify/ui-react";
import { PerformerEventAssignment } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function PerformerEventAssignmentUpdateForm(props) {
  const {
    id: idProp,
    performerEventAssignment: performerEventAssignmentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    timespan: "",
  };
  const [timespan, setTimespan] = React.useState(initialValues.timespan);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = performerEventAssignmentRecord
      ? { ...initialValues, ...performerEventAssignmentRecord }
      : initialValues;
    setTimespan(cleanValues.timespan);
    setErrors({});
  };
  const [performerEventAssignmentRecord, setPerformerEventAssignmentRecord] =
    React.useState(performerEventAssignmentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PerformerEventAssignment, idProp)
        : performerEventAssignmentModelProp;
      setPerformerEventAssignmentRecord(record);
    };
    queryData();
  }, [idProp, performerEventAssignmentModelProp]);
  React.useEffect(resetStateValues, [performerEventAssignmentRecord]);
  const validations = {
    timespan: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          timespan,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            PerformerEventAssignment.copyOf(
              performerEventAssignmentRecord,
              (updated) => {
                Object.assign(updated, modelFields);
              }
            )
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PerformerEventAssignmentUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Timespan"
        placeholder="Please select an option"
        isDisabled={false}
        value={timespan}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timespan: value,
            };
            const result = onChange(modelFields);
            value = result?.timespan ?? value;
          }
          if (errors.timespan?.hasError) {
            runValidationTasks("timespan", value);
          }
          setTimespan(value);
        }}
        onBlur={() => runValidationTasks("timespan", timespan)}
        errorMessage={errors.timespan?.errorMessage}
        hasError={errors.timespan?.hasError}
        {...getOverrideProps(overrides, "timespan")}
      >
        <option
          children="Fifteen minute"
          value="FIFTEEN_MINUTE"
          {...getOverrideProps(overrides, "timespanoption0")}
        ></option>
        <option
          children="Twenty minute"
          value="TWENTY_MINUTE"
          {...getOverrideProps(overrides, "timespanoption1")}
        ></option>
        <option
          children="Thirty minute"
          value="THIRTY_MINUTE"
          {...getOverrideProps(overrides, "timespanoption2")}
        ></option>
        <option
          children="Hour"
          value="HOUR"
          {...getOverrideProps(overrides, "timespanoption3")}
        ></option>
        <option
          children="Hour and a half"
          value="HOUR_AND_A_HALF"
          {...getOverrideProps(overrides, "timespanoption4")}
        ></option>
        <option
          children="Two hour"
          value="TWO_HOUR"
          {...getOverrideProps(overrides, "timespanoption5")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || performerEventAssignmentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || performerEventAssignmentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
