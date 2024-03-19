package com.example.hermestest;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.res.AssetManager;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;



import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

public class MainActivity extends Activity {
    static native void evaluateJavaScript(String script);

    static native void evaluateJavaScript2(byte[] bytes);

    public static final String TAG = "js-hermes";

    static {
        System.loadLibrary("js-hermes");
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        findViewById(R.id.test).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    String bytes = readFileFromAssets(getApplicationContext(), "test.js");
                    evaluateJavaScript(bytes);
                } catch (Exception ex) {
                    Log.e(TAG, ex.getLocalizedMessage());
                }
            }
        });
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }

    public String readFileFromAssets(Context context, String fileName) throws IOException {
        if (null == context || null == fileName) return null;
        AssetManager am = context.getAssets();
        InputStream input = am.open(fileName);
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        int len = 0;
        while ((len = input.read(buffer)) != -1) {
            output.write(buffer, 0, len);
        }
        output.close();
        input.close();
        return output.toString();
    }

    public byte[] readFileBytesFromAssets(Context context, String fileName) throws IOException {
        if (null == context || null == fileName) return null;
        AssetManager am = context.getAssets();
        InputStream input = am.open(fileName);
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        int len = 0;
        while ((len = input.read(buffer)) != -1) {
            output.write(buffer, 0, len);
        }
        output.close();
        input.close();
        return output.toByteArray();
    }
}
