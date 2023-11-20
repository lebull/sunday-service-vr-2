/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Performer } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function PerformerCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    dj_name: "",
    fur_name: "",
  };
  const [dj_name, setDj_name] = React.useState(initialValues.dj_name);
  const [fur_name, setFur_name] = React.useState(initialValues.fur_name);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDj_name(initialValues.dj_name);
    setFur_name(initialValues.fur_name);
    setErrors({});
  };
  const validations = {
    dj_name: [],
    fur_name: [],
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
          dj_name,
          fur_name,
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
          await DataStore.save(new Performer(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PerformerCreateForm")}
      {...rest}
    >
      <TextField
        label="Dj name"
        isRequired={false}
        isReadOnly={false}
        value={dj_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dj_name: value,
              fur_name,
            };
            const result = onChange(modelFields);
            value = result?.dj_name ?? value;
          }
          if (errors.dj_name?.hasError) {
            runValidationTasks("dj_name", value);
          }
          setDj_name(value);
        }}
        onBlur={() => runValidationTasks("dj_name", dj_name)}
        errorMessage={errors.dj_name?.errorMessage}
        hasError={errors.dj_name?.hasError}
        {...getOverrideProps(overrides, "dj_name")}
      ></TextField>
      <TextField
        label="Fur name"
        isRequired={false}
        isReadOnly={false}
        value={fur_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dj_name,
              fur_name: value,
            };
            const result = onChange(modelFields);
            value = result?.fur_name ?? value;
          }
          if (errors.fur_name?.hasError) {
            runValidationTasks("fur_name", value);
          }
          setFur_name(value);
        }}
        onBlur={() => runValidationTasks("fur_name", fur_name)}
        errorMessage={errors.fur_name?.errorMessage}
        hasError={errors.fur_name?.hasError}
        {...getOverrideProps(overrides, "fur_name")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
