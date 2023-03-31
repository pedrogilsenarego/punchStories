import { Title } from "../../../../styles";
import { i18n } from "../../../../translations/i18n";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Textfield from "../../../../components/Inputs/TextField";
import { Form, Formik } from "formik";
import { FORM_VALIDATION } from "./validation";
import ButtonForm from "../../../../components/Buttons/ButtonFormik";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../../../slicer/books/books.actions";
import FileUploader from "../../../../components/Inputs/FileUploader";
import SelectWrapper from "../../../../components/Inputs/SelectForm";
import { templates } from "../../../../constants/templates";
import TextfieldIncrementable from "../../../../components/Inputs/TextFieldIncrementable";

import PreviewWrapper from "./PreviewWrapper";
import { State } from "../../../../slicer/types";
import Loader from "../../../../components/Loader";

const SubmitStory = () => {
  const INITIAL_FORM_STATE = {
    title: "",
    titleEN: "",
    template: "0",
    resume: "",
    resumeEN: "",
    punchLines: "",
    punchLinesEN: "",
    ps: "",
    psEN: "",
  };
  const dispatch = useDispatch();
  const loading = useSelector<State, boolean>((state) => state.general.loading);
  const progress = useSelector<State, number>((state) => state.books.progress);

  const handleSubmit = (values: any) => {
    dispatch(addBook({ ...values }));
  };

  return (
    <>
      <Title fontSize='16px'>
        {i18n.t("modules.admin.manageBooks.submitBook.breadCrumbs")}
      </Title>
      <Divider />

      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
        validationSchema={FORM_VALIDATION}
      >
        <Form>
          {loading ? (
            <Box
              style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Loader

                size={200}
                color='darkGrey'
                customMessage='Your Data is being send'
                progress={progress}
              />
            </Box>
          ) : (
            <>
              <Box
                rowGap={2}
                display='flex'
                flexDirection='column'
                sx={{ mt: "20px" }}
              >
                <Grid container columnSpacing={2} rowSpacing={6}>
                  <Grid item xs={6}>
                    <Box style={{ width: "350px" }}>
                      <Textfield
                        label={i18n.t(
                          "modules.admin.manageBooks.submitBook.title"
                        )}
                        name='title'
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box style={{ width: "350px" }}>
                      <Textfield
                        label={`${i18n.t(
                          "modules.admin.manageBooks.submitBook.title"
                        )} EN`}
                        name='titleEN'
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Textfield
                        label={i18n.t(
                          "modules.admin.manageBooks.submitBook.resume"
                        )}
                        name='resume'
                        multiline
                        rows={6}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Textfield
                        label={`${i18n.t(
                          "modules.admin.manageBooks.submitBook.resume"
                        )} EN`}
                        name='resumeEN'
                        multiline
                        rows={6}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Textfield
                        label={i18n.t(
                          "modules.admin.manageBooks.submitBook.ps"
                        )}
                        name='ps'
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Textfield
                        label={`${i18n.t(
                          "modules.admin.manageBooks.submitBook.ps"
                        )} EN`}
                        name='psEN'
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <TextfieldIncrementable
                        label={i18n.t(
                          "modules.admin.manageBooks.submitBook.punchLines"
                        )}
                        name='punchLines'
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <TextfieldIncrementable
                        label={`${i18n.t(
                          "modules.admin.manageBooks.submitBook.punchLines"
                        )} EN`}
                        name='punchLinesEN'
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <SelectWrapper
                      name='template'
                      options={templates}
                      label={i18n.t(
                        "modules.admin.manageBooks.submitBook.template"
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FileUploader
                      name='content'
                      multiple
                      fieldTitle={i18n.t(
                        "modules.admin.manageBooks.submitBook.content"
                      )}
                      acceptType='image/jpeg,image/jpg'
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box
                display='flex'
                justifyContent='start'
                sx={{ mt: "20px" }}
                columnGap={2}
              >
                <PreviewWrapper />
                <ButtonForm
                  label={i18n.t("modules.home.contacts.form.send")}
                  disabled={loading}
                />
              </Box>
            </>
          )}
        </Form>
      </Formik>
    </>
  );
};

export default SubmitStory;
