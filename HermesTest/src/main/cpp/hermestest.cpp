#include <jni.h>
#include <android/log.h>
#include <hermes.h>
#include <jsi.h>
#include "ByteBuffer.h"

extern "C"
JNIEXPORT void JNICALL
Java_com_example_hermestest_MainActivity_evaluateJavaScript(JNIEnv *env, jclass clazz,
                                                            jstring script) {
    try {
        std::shared_ptr<facebook::hermes::HermesRuntime> runtime = facebook::hermes::makeHermesRuntime();
        runtime->global().setProperty(*runtime, "JsNativeLog", facebook::jsi::Function::createFromHostFunction(
                *runtime,
                facebook::jsi::PropNameID::forAscii(*runtime, "JsNativeLog"),
                0,
                [](facebook::jsi::Runtime &rt,
                   const facebook::jsi::Value &thisVal,
                   const facebook::jsi::Value *arguments,
                   size_t argumentCount) {
                    auto str = arguments[0].getString(rt).utf8(rt);
                    __android_log_print(ANDROID_LOG_INFO, "JsNativeLog", "DRE-JSLog  %s", str.c_str());
                    return facebook::jsi::Value();
                }));
        const char *scriptChar = env->GetStringUTFChars(script, nullptr);
        std::string source = std::string(scriptChar);
        std::shared_ptr<const facebook::jsi::Buffer> hbcPtr = std::make_unique<facebook::jsi::StringBuffer>(source);
        auto start = clock();
//        runtime->evaluateJavaScript(hbcPtr, "test");
        auto preparedJs = runtime->prepareJavaScript(hbcPtr, "test");
        runtime->evaluatePreparedJavaScript(preparedJs);
        __android_log_print(ANDROID_LOG_INFO, "robertTest", "evaluateJavaScript cost %ld %d", (clock() - start) * 1000 / CLOCKS_PER_SEC, source.length());
    } catch (const facebook::jsi::JSError &error) {
        __android_log_print(ANDROID_LOG_ERROR, "JsNativeLog", "%s %s", error.getMessage().c_str(), error.getStack().c_str());
    } catch (const facebook::jsi::JSIException &err) {
        __android_log_print(ANDROID_LOG_ERROR, "JsNativeLog", "%s", err.what());

    } catch (const std::exception &ex) {
        __android_log_print(ANDROID_LOG_ERROR, "JsNativeLog", "%s", ex.what());

    } catch (...) {

    }

}

extern "C"
JNIEXPORT void JNICALL
Java_com_example_hermestest_MainActivity_evaluateJavaScript2(JNIEnv *env, jclass clazz,
                                                             jbyteArray bytes) {
    try {
        std::shared_ptr<facebook::hermes::HermesRuntime> runtime = facebook::hermes::makeHermesRuntime();
        runtime->global().setProperty(*runtime, "JsNativeLog", facebook::jsi::Function::createFromHostFunction(
                *runtime,
                facebook::jsi::PropNameID::forAscii(*runtime, "JsNativeLog"),
                0,
                [](facebook::jsi::Runtime &rt,
                   const facebook::jsi::Value &thisVal,
                   const facebook::jsi::Value *arguments,
                   size_t argumentCount) {
                    auto str = arguments[0].getString(rt).utf8(rt);
                    __android_log_print(ANDROID_LOG_INFO, "JsNativeLog", "DRE-JSLog  %s", str.c_str());
                    return facebook::jsi::Value();
                }));
        std::shared_ptr<facebook::jsi::jni::JavaByteBuffer> hbcPtr = std::make_shared<facebook::jsi::jni::JavaByteBuffer>(env, bytes);
        auto start = clock();
        auto res = runtime->evaluateJavaScript(hbcPtr, "test");
        __android_log_print(ANDROID_LOG_INFO, "robertTest", "evaluateJavaScript hbc cost %ld", (clock() - start) * 1000 / CLOCKS_PER_SEC);

        auto val = facebook::jsi::Value(*runtime, res);
    } catch (const facebook::jsi::JSError &error) {
        __android_log_print(ANDROID_LOG_ERROR, "JsNativeLog", "%s %s", error.getMessage().c_str(), error.getStack().c_str());
    } catch (const facebook::jsi::JSIException &err) {
        __android_log_print(ANDROID_LOG_ERROR, "JsNativeLog", "%s", err.what());

    } catch (const std::exception &ex) {
        __android_log_print(ANDROID_LOG_ERROR, "JsNativeLog", "%s", ex.what());

    } catch (...) {

    }

}