import { Title } from "../../../../styles";
import { i18n } from "../../../../translations/i18n";
import { Box, Divider, Grid } from "@mui/material";
import Textfield from "../../../../components/Inputs/TextField";
import { Form, Formik } from "formik";
import { FORM_VALIDATION } from "./validation";
import ButtonForm from "../../../../components/Buttons/ButtonFormik";
import { useDispatch } from "react-redux";
import { addBook } from "../../../../slicer/books/books.actions";
import FileUploader from "../../../../components/Inputs/FileUploader";
import SelectWrapper from "../../../../components/Inputs/SelectForm";
import { templates } from "../../../../constants/templates";
import TextfieldIncrementable from "../../../../components/Inputs/TextFieldIncrementable";

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
    psEN: ""
  };

  const dispatch = useDispatch();

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
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={FORM_VALIDATION}
      >
        <Form>
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
                    label={i18n.t("modules.admin.manageBooks.submitBook.title")}
                    name='title'
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box style={{ width: "350px" }}>
                  <Textfield
                    label={`${i18n.t("modules.admin.manageBooks.submitBook.title")} EN`}
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
                <Box >
                  <Textfield
                    label={i18n.t("modules.admin.manageBooks.submitBook.ps")}
                    name='ps'
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box >
                  <Textfield
                    label={`${i18n.t("modules.admin.manageBooks.submitBook.ps")} EN`}
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

          <Box display='flex' justifyContent='start' sx={{ mt: "20px" }}>
            <ButtonForm label={i18n.t("modules.home.contacts.form.send")} />
          </Box>
        </Form>
      </Formik>
    </>
  );
};

export default SubmitStory;
